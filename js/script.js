"strict";

// Updating time of "fixed" cities
let dateLis = document.querySelector("#lisbon-date");
let timeLis = document.querySelector("#lisbon-time");
let dateSyd = document.querySelector("#sydney-date");
let timeSyd = document.querySelector("#sydney-time");
let dateParis = document.querySelector("#paris-date");
let timeParis = document.querySelector("#paris-time");

let citySyd = document.querySelector("#sydney");
let cityParis = document.querySelector("#paris");
let cities = document.querySelector(".cities");

const updateTime = function () {
  // Lisbon
  let lisbonTime = moment().tz("Europe/Lisbon").format("H:m:ss A");
  let lisbonDate = moment().tz("Europe/Lisbon").format("MMMM Do YYYY");
  dateLis.innerHTML = lisbonDate;
  timeLis.innerHTML = lisbonTime;

  // Sydney
  let sydneyTime = moment().tz("Australia/Sydney").format("H:m:ss A");
  let sydneyDate = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
  dateSyd.innerHTML = sydneyDate;
  timeSyd.innerHTML = sydneyTime;

  // Paris
  let parisTime = moment().tz("Europe/Paris").format("H:m:ss A");
  let parisDate = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  dateParis.innerHTML = parisDate;
  timeParis.innerHTML = parisTime;
};
updateTime();
setInterval(updateTime, 1000);

// Extra options time
let chosenCountry = document.querySelector("#countries");
let newCity = document.querySelector(".cities");

const updateTZ = function (timezone) {
  if (timezone === "Europe/Madrid") {
    let currentTime = moment().tz(timezone).format("H:m:ss A");

    newCity.innerHTML = `
      <div id="madrid" class="city">
        <h2>Madrid</h2><h2>${currentTime}</h2>
      </div>`;
    return;
  }
  if (timezone === "Europe/Rome") {
    let currentTime = moment().tz(timezone).format("H:m:ss A");

    newCity.innerHTML = `
      <div id="rome" class="city">
        <h2>Rome</h2><h2>${currentTime}</h2>
      </div>`;
    return;
  }

  if (timezone === "Asia/Tokyo") {
    let currentTime = moment().tz(timezone).format("H:m:ss A");

    newCity.innerHTML = `
      <div id="tokyo" class="city">
        <h2>Tokyo</h2><h2>${currentTime}</h2>
      </div>`;
    return;
  }
  let currentTimeZone = moment.tz.guess();
  console.log(currentTimeZone);
  let cityName = currentTimeZone.replace("_", " ").split("/")[1];
  let currentTime = moment().tz(currentTimeZone).format("H:m:ss A");
  console.log(currentTime);
  newCity.innerHTML = `
      <div id=${cityName} class="city">
        <h2>${cityName}</h2><h2>${currentTime}</h2>
      </div>`;
};
let intervalId;

const showTimeZone = function (event) {
  console.log(event);
  console.log(event.target.value);
  console.log(`"${event.target.value}"`);
  const timezone = event.target.value;
  if (timezone) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    updateTZ(timezone);
    intervalId = setInterval(() => updateTZ(timezone), 1000);
  }
};

chosenCountry.addEventListener("change", showTimeZone);
