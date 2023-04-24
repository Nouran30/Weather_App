const inputBox = document.getElementById("input");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".weather-img");
const temprature = document.querySelector(".temp")
const description = document.querySelector(".descp")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")

const baseUrl = `https://api.weatherapi.com/v1/current.json?key=67405fc9313d4e0d863175937232404&q=`

async function getData(city) {
    let response = await fetch(baseUrl + city + `&aqi=no`);
    response = await response.json();
    data = response;
    console.log(data);

    temprature.innerHTML = `${data.current.temp_c}<sup>℃</sup>`;
    description.innerHTML = `${data.current.condition.text}`;
    humidity.innerHTML = `${data.current.humidity}%`;
    wind.innerHTML = `${data.current.wind_kph}Km/h`;
    weatherImg.src = `${data.current.condition.icon}`;
    console.log(weatherImg);

}
//``

searchBtn.addEventListener("click", () => {
    getData(inputBox.value);
})