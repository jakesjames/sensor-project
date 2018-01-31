const fetchTemperature = () => {
	fetch('/temperature')
	.then(results => {
		return results.json()
	})
	.then(data => {
		const temperatureDisplay = document.getElementById('temperature-display')
		temperatureDisplay.innerHTML = '<strong>' + data.value + '</strong>'
	})
}

const fetchHumidity = () => {
	fetch('/humidity')
	.then(results => {
		return results.json()
	})
	.then(data => {
		const humidityDisplay = document.getElementById('humidity-display')
		humidityDisplay.innerHTML = '<strong>' + data.value + '</strong>'
		})
}

setInterval(() => {
	fetchTemperature()
	fetchHumidity()
}, 2000)

/*
*Get the context of the temperature canvas element
*/

const temperatureCanvasCtx = document.getElementById('temperature-chart').getContext('2d')

/*
Create a new chart on the context we just instantiated
*/

const temperatureChart = new Chart(temperatureCanvasCtx, 
{
	/*
	We're going to show the ongoing temperature as a line chart
	*/
	type: 'line',
	data: {
		labels: ['10:30', '10:31', '10:32', '10:32'],
		datasets: [{
			data: [12, 19, 23, 17],
			backgroundColor: 'rgba(255, 205, 210, 0.5)'
		}]
	},
	options: {
		legend: {
			display: false
		},
		responsive: true,
		maintainAspectRatio: false
	}
})
