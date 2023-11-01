const forecastUrl="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Hanoi";
const apiKey="987cd37eea9b0bb51fa6ed955f66b453";
async function checkWeather()
{
	const forecastResponce = await fetch(forecastUrl + "&appid=" + apiKey);
	var foredata= await forecastResponce.json();
	console.log(foredata.list[0].main.temp+"°C");
}