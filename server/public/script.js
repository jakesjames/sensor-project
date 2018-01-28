fetch('/temperature')
.then(results => {
	return results.text()
})
.then(text => {
	const temperatureDisplay = document.getElementByID('temperature-display')
	temperatureDisplay.innerHTML = text
})