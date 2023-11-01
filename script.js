var important=9541;

const apiKey="987cd37eea9b0bb51fa6ed955f66b453";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=Hanoi";
const forecastUrl="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Hanoi";

async function checkWeather()
{
	const response = await fetch(apiUrl + '&appid=' + apiKey);
	const forecastResponce = await fetch(forecastUrl + "&appid=" + apiKey);
	var data = await response.json();
	var foredata= await forecastResponce.json();
	console.log(data);
	document.querySelector("#city").innerHTML=data.name;
	document.querySelector("#temp").innerHTML=data.main.temp +"°C";
	document.querySelector("#humidity").innerHTML=data.main.humidity +"%";
	document.querySelector("#cloud").innerHTML=data.clouds.all;
	document.querySelector("#wind").innerHTML=data.wind.speed + "km/h";
	document.querySelector("#city").innerHTML=data.name + ", " + data.sys.country;
}


checkWeather();