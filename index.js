document.addEventListener("DOMContentLoaded", function () {
  let locationElement = document.getElementById("location");
  locationElement.addEventListener("input", function () {
    var value = locationElement.value;
    fetchData(value);
  });
});

async function fetchData(value) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=3c90b8808b764b4480f220429240906&q=${value}&days=7`
    );
    let weatherData = await response.json();

    let weather_type = document.getElementsByClassName("weather_type");
    let weather_location = document.getElementsByClassName("weather_location");
    let temp = document.getElementsByClassName("temp");

    weather_type[0].innerHTML = weatherData.current["condition"].text;

    weather_location[0].innerHTML =
      weatherData.location.name + ", " + weatherData.location.country;

    temp[0].innerHTML = weatherData.current.temp_c + " &#8451;";
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
}
