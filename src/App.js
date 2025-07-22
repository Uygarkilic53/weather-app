import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "YOUR API KEY";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      /> 
    
      {typeof weatherData.main === "undefined" ? (
        <div className="welcome">
          <p>Welcome to weather app! Enter in a city to get the weather of.</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}</p>
          <p className="weather">{weatherData.weather && weatherData.weather[0]?.main}</p>
        </div>
      )}

      {weatherData.cod=== "404" ? (
        <p>City Not Found</p>
      ): (
        <>
        
        </>
      )}
    </div>
  );
}

export default App;
