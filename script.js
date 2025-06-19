document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const apiKey = "e467712b257e418838be97cc881a71de"; // ✅ Use your real key
  const city = "London,uk"; // ✅ Note the "uk" matches Cypress test
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").textContent =
        `Current weather in London: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent =
        "Error fetching weather data.";
      console.error("Error:", error);
    });
});
