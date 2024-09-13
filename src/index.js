function updateTime(){
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesTimeElement = document.querySelector("#los-angeles .time");
let losAngelesDateElement = document.querySelector("#los-angeles .date");
let losAngelesTime = moment ().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMM DD YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SSS[<small>]A[</small>]"
);

let sydneyElement = document.querySelector("#sydney");
let sydneyTimeElement = document.querySelector("#sydney .time");
let sydneyDateElement = document.querySelector("#sydney .date");
let sydneyTime = moment ().tz("Oceania/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format ("MMMM DD YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss:SSS[<small>]A[</small>]"
);
}

function updateCity (event) {
let cityTimeZone = event.target.value;
if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
}
let cityName =cityTimeZone.replace ("_", " ").split("/")[1]
let cityTime = moment ().tz(cityTimeZone)
let citiesElement = document.querySelector("#cities")
citiesElement.innerHTML = `
<div class="city">
      <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM DD YYYY")}</div>
    </div>
      <div class="time">${cityTime.format("h:mm:ss:SSS")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href ="/">All cities</a>
    `;
}
updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector ("#city")
citiesSelectElement.addEventListener("change", updateCity)
