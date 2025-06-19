document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const apiKey = "YOUR_API_KEY_HERE"; // 🔁 Replace this with your actual API key
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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
        `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent =
        "Error fetching weather data.";
      console.error("Error:", error);
    });
});
