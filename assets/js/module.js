

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dataUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC in seconds
 * 
 * @returns {string} Date string. format: "Sunday 10, Jan"
 */
export const getDate = function (dataUnix, timezone) {
    const date = new Date((dataUnix + timezone) * 1000);
    const dayName = weekDayNames[date.getUTCDay()];
    const month = monthName[date.getUTCMonth()];
    const day = date.getUTCDate();

    return `${dayName} ${day}, ${month}`;
};

/**
 * 
 * @param {number} dataUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC in seconds
 * 
 * @returns {string} Date string. format: "10 Aug"
 */
export const getDateMonth = function (dataUnix, timezone) {
    const date = new Date((dataUnix + timezone) * 1000);
    const day = date.getUTCDate();
    const month = monthName[date.getUTCMonth()];

    return `${day} ${month}`;
};


/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}`;
};

/**
 * 
 * @param {number} mps Meters per second
 * @returns {number} Kilometers per hour
 */
export const mps_to_kmh = mps => {
    return mps * 3.6;
};

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
};
