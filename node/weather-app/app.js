const request = require('postman-request')

const apiKey = '9153eb88e43c9e0ac3bd9005cc36dd19';

const baseUrl = 'http://api.weatherstack.com/';

let query = 'New%20York';

let url = `${baseUrl}/current?access_key=${apiKey}&query=${query}`;

request({ url }, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data.current);
});

console.log(url);