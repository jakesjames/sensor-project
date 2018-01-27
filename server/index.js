const express = require('express');
const path = require('path')
const app = express();
const getCachedSensorReadings = require('./get-cached-sensor-readings')

/*
we now utilize the synchronous methods exported from the 'get-cached-sensor-readings' module
*/

app.get('/temperature', function (req, res) {
	res.send(getCachedSensorReadings.getTemperature().toFixed(1) + '°C');
})

app.get('/humidity', function (req, res) {
	res.send(getCachedSensorReadings.getHumidity().toFixed(1) + '%');
})

app.get('/public', function () {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
