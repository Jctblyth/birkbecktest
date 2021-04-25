function loadWeatherApp() {


  const weatherForm = document.querySelector("#get-weather form");



  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const API_KEY = "d9c8c3a68ead0c5cf25780c087cde157";
    const PROXY_URL = "http://cors-anywhere.herokuapp.com";


    const weatherInputValue = weatherForm.elements.weatherInput.value;

    fetch(
      `${PROXY_URL}/https://api.openweathermap.org/data/2.5/weather?q=${weatherInputValue}&appid=${API_KEY}&units=metric`
    ).then(res => {
      return res.json()


    }).then(data => {
      console.log(data)
      displayWeatherInfo(data)

    });


  });
}

function displayWeatherInfo(data) {
  const weatherInfoSection = document.querySelector("#weather-info")

  const locationHeader = document.createElement("h2");
  locationHeader.textContent = data.name

  const visibility = document.createElement("h6");
  visibility.textContent = data.visibility


  weatherInfoSection.appendChild(locationHeader)
  weatherInfoSection.appendChild(visibility)


}

loadWeatherApp()

console.log("running")