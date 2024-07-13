function dateUpdate() {
  let losAngelesElement = document.querySelector("#los-angeles");
  losAngelesElementTime = losAngelesElement.querySelector(".time");
  losAngelesElementTime.innerHTML = moment()
    .tz("America/Los-Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  let losAngelesElementDate = losAngelesElement.querySelector(".date");
  losAngelesElementDate.innerHTML = moment()
    .tz("America/Los-Angeles")
    .format("MMM Do YYYY");

  let parisElement = document.querySelector("#paris");
  parisElementTime = parisElement.querySelector(".time");
  parisElementTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
  let parisElementDate = parisElement.querySelector(".date");
  parisElementDate.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMM Do YYYY");
}

dateUpdate();
setInterval(dateUpdate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity);
