setInterval (function () {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesTimeElement = document.querySelector("#los-angeles .time");
let losAngelesDateElement = document.querySelector("#los-angeles .date");
let losAngelesTime = moment ().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMM DD YYYY");
losAngelesTimeElement.innerHTML = ` ${losAngelesTime.format(
    "h:mm:ss"
)} <small>${losAngelesTime.format("A")}</small>`;
},1000);

let sydneyElement = document.querySelector("#sydney");
let sydneyTimeElement = document.querySelector("#sydney .time");
let sydneyDateElement = document.querySelector("#sydney .date");
let sydneyTime = moment ().tz("Oceania/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format ("MMMM DD YYYY");
sydneyTimeElement.innerHTML = ` ${sydneyTime.format(
    "h:mm:ss"
)} <small>${sydneyTime.format("A")}</small>`;