


'use strict';
import { updateWeather } from "./app.js";

//const defaultLocation = "#/weather?lat=51.5074&lon=-0.1278"; // Default to London, UK

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;
        updateWeather(latitude, longitude);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * 
 * @param {string} query search query
 */
const searchedLocation = query => updateWeather(...query.split("&").map(param => param.split("=")[1]));

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes("?") ? requestURL.split("?") : [requestURL];

    if (routes.get(route)) {
        routes.get(route)(query);
    } else {
        console.error('404 - Route not found');
    }
}

window.addEventListener("hashchange", checkHash);
window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});
