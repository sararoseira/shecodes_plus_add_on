"strict";

// let chosenCountry = document.querySelector("#countries");

// const showTimeZone = function (event) {
//   if (event.target.value.length > 0) {
//     let currentTime = moment()
//       .tz(event.target.value)
//       .format("dddd, MMMM, Do, YYYY h:mm A");

//     alert(`It is ${currentTime} in ${event.target.value}`);
//   }
// };

// chosenCountry.addEventListener("change", showTimeZone);

let country = document.querySelector("#lisbon");

const cenas = function () {
  let countryTime = moment().tz("Europe/Lisbon").format("H:m:ss");
  console.log(countryTime);

  country.innerHTML = `<h2>Lisbon</h2><h2>${countryTime}</h2>`;
};

setInterval(cenas, 1000);
