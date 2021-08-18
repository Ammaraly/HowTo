const request = require('postman-request')


const geocode = (adress, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoiYW1tYXJhbHkiLCJhIjoiY2tzaHNkNDFuMXg4djJuczYwdHE5YTExYiJ9.oabhaYBksEG1uAwu-_iA7g&limit=1`;
    request({ url, json: true }, callback);
}

const weather = (query, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9153eb88e43c9e0ac3bd9005cc36dd19&query=${query}`;
    request({ url, json: true }, callback);
}

weather("Lahore", (err, res) => {
    if (err) {
        console.log("Unable to connect to weather service.")
        return;
    }
    if (res.body.error) {
        console.log(`Error ${res.body.error.code} (${res.body.error.type}) : ${res.body.error.info}`);
        return;
    }
    let message = `Weather is ${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees.`;
    console.log(message);
})

geocode("Lahore Punjab", (err, res) => {
    if (err) {
        console.log("Unable to connect to geocoding service.")
        return;
    }
    if (res.body.message) {
        console.log(`Error : ${res.body.message}`)
        return;
    }
    if (res.body.features.length < 1) {
        console.log("The queried location was not found.")
        return;
    }
    let message = `Location is ${res.body.features[0].place_name}. [Latitude: ${res.body.features[0].center[1]}, Longitude: ${res.body.features[0].center[0]}]`;
    console.log(message);
});

// console.log(mapBoxGeocodingApi.getUrl());