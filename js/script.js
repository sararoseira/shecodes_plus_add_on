"strict";

let chosenCountry = document.querySelector("#countries");

const showTimeZone = function (event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM, Do, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
};

chosenCountry.addEventListener("change", showTimeZone);
