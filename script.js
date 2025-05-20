
async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    const result = document.getElementById("result");

    if (data.cod === 200) {
        result.innerHTML = \`
            <h2>\${data.name}</h2>
            <p>Temperature: \${data.main.temp} °C</p>
            <p>Weather: \${data.weather[0].description}</p>
        \`;
    } else {
        result.innerHTML = "<p>City not found. Try again.</p>";
    }
}
