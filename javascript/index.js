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
  let city = event.target.value;
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity);
