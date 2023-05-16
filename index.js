const value = document.getElementById('search');
const search = document.getElementById('click');
const results = document.getElementById('result')





const weather = async()=>{
        
	const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${value.value}&format=json&u=f`;
	
		const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4d816cafddmshae9d40e69507a50p14a08cjsnf02b3fda397c',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
		}
	};
	

	
	
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	if (result.current_observation.atmosphere.humidity >25 && result.current_observation.atmosphere.humidity<50){
		document.body.style.backgroundImage = "url('sunsine.jpg')"
		document.getElementById('icon').innerText = "☀️ sunshine"


		document.getElementById("predict").innerText = "True"
	}
	else if(result.current_observation.atmosphere.humidity >50 && result.current_observation.atmosphere.humidity<65) {
		document.body.style.backgroundImage = "url('cloud.jpg')"
		document.getElementById('icon').innerText = "☁️ Cloud"


	}
	else{

		document.body.style.backgroundImage = "url('rain.jpg')"
		document.getElementById('icon').innerText = "☁️ Cloud"
	}
	console.log(result.current_observation.condition.temperature)
	let far = (result.current_observation.condition.temperature-32)*0.5;
	
	
	
	document.getElementById("temperature").innerText = `${far}°C`
	document.getElementById("city").innerText = `${result.location.city}`
	document.getElementById("country").innerText = `${result.location.country}`
	document.getElementById("humidity").innerText = `${result.current_observation.atmosphere.humidity}`
	document.getElementById("speed").innerText = `${result.current_observation.wind.speed}`
	document.getElementById("sunrise").innerText = `${result.current_observation.astronomy.sunrise}`
	document.getElementById("sunset").innerText = `${result.current_observation.astronomy.sunset}`
	document.getElementById("visibility").innerText = `${result.current_observation.atmosphere.visibility}`





    

}
 



search.onclick = ()=>weather()