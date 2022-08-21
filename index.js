let now= new Date();
let date= document.querySelector("#currentDate");
  let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Suterday"];
  let day = days[now.getDay()];
  let hours=now.getHours();
  if(hours<10){ hours= `0${hours}`;
  }
  let minutes=now.getMinutes();
  if (minutes<10){ minutes= `0${minutes}`;}

currentDate.innerHTML= (`${day}, ${hours}:${minutes}`);

function search(event){
event.preventDefault();
let searchInput= document.querySelector("#search-input");
let h1= document.querySelector("h1");
h1.innerHTML=(searchInput.value);
}
let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit",search);
 //Bonus
function convertFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertFahrenheit);

function convertCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertCelsius);