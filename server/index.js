const express = require('express');
const path = require('path')
const app = express();
const getCachedSensorReadings = require('./get-cached-sensor-readings')

/*
Here, we are introduced to express middleware.  Middleware is a fancy word to describe a set of actions
that have to take place before the request handler. 

In the statement below, we use the express.static middleware, and bind it to the /public route
*/

app.use('/public', express.static(path.join(__dirname, 'public')))

/*
we now utilize the synchronous methods exported from the 'get-cached-sensor-readings' module
*/

/*
app.get('/temperature', function (req, res) {
	res.send(getCachedSensorReadings.getTemperature().toFixed(1));
})

app.get('/humidity', function (req, res) {
	res.send(getCachedSensorReadings.getHumidity().toFixed(1));
})

app.get('/public', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})
*/

app.get('tempeature', function (req, res) {
res.json({
	value: getCachedSensorReadings.getTemperature().toFixed(1)
})
})

app.get('humidity', function (req, res) {
res.json({
	value: getCachedSensorReadings.getHumidity().toFixed(1)
})
})

app.listen(3000, function(){
	console.log('Server listening on port 3000');
});
