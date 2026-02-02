
export function airQuality(aqi = 0) {
    let sLevel = "";

    if (aqi <= 50) {
        sLevel = "Good";
    } else if (aqi <= 100) {
        sLevel = "Moderate";
    } else if (aqi <= 150) {
        sLevel = "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
        sLevel = "Unhealthy";
    } else if (aqi <= 300) {
        sLevel = "Very Unhealthy";
    } else {
        sLevel = "Hazardous";
    }

    return sLevel;
}

if (import.meta.main) {
    console.log(`AQI 30 → ${airQuality(30)}`);
    console.log(`AQI 75 → ${airQuality(75)}`);
    console.log(`AQI 125 → ${airQuality(125)}`);
    console.log(`AQI 175 → ${airQuality(175)}`);
    console.log(`AQI 250 → ${airQuality(250)}`);
    console.log(`AQI 350 → ${airQuality(350)}`);
}
