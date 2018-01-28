fetch('/temperature')
.then(results => {
	return results.text()
})
.then(text => {
	const temperatureDisplay = document.getElementByID('temperatureDisplay')
	temperatureDisplay.innerHTML = text
})