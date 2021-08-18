const request = require('postman-request')

const weatherApi = {
    apiKey: '9153eb88e43c9e0ac3bd9005cc36dd19',
    baseUrl: 'http://api.weatherstack.com/',
    query: 'New%20York',
    getUrl() {
        return `${this.baseUrl}/current?access_key=${this.apiKey}&query=${this.query}`;
    }
}

request({ url: weatherApi.getUrl(), json: true }, (err, res) => {
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
});

const mapBoxGeocodingApi = {
    apiKey: 'pk.eyJ1IjoiYW1tYXJhbHkiLCJhIjoiY2tzaHNkNDFuMXg4djJuczYwdHE5YTExYiJ9.oabhaYBksEG1uAwu-_iA7g',
    baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    search_text: '*',
    limit: 1,
    getUrl() {
        return `${this.baseUrl}/${this.search_text}.json?access_token=${this.apiKey}&limit=${this.limit}`;
    }
}

request({ url: mapBoxGeocodingApi.getUrl(), json: true }, (err, res) => {
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