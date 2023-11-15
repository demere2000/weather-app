// Importing React and its useState hook
import React, { useState } from 'react';

// Defining the Weather component
function Weather() {
  // Creating a state variable 'weatherData' to store the weather information
  // 'setWeatherData' is the function to update this state
  const [weatherData, setWeatherData] = useState(null);

  // Defining an asynchronous function to fetch weather data
  const fetchWeather = async () => {
    // Your Weatherstack API key (replace 'YOUR_API_KEY' with your actual key)
    const apiKey = '404f1c548c9f49ef731942be7e49061b'; 
    // The city for which you want to fetch the weather (replace 'YourCity')
    const city = 'London';
    // The URL for the Weatherstack API, including the API key and the city query
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
      // Making an API request to the provided URL
      const response = await fetch(url);
      // Parsing the JSON response from the API
      const data = await response.json();
      // Logging the data for inspection
      console.log(data);
      // Updating the 'weatherData' state with the fetched data
      setWeatherData(data);
    } catch (error) {
      // Logging any errors that occur during the fetch operation
      console.error('Error fetching weather data:', error);
      // Resetting the 'weatherData' state in case of an error
      setWeatherData(null);
    }
  };

  // The return statement of the Weather component, which describes its rendered UI
  return (
    <div>
      {/* A button that, when clicked, calls the 'fetchWeather' function */}
      <button onClick={fetchWeather}>Get Weather</button>
      {/* Conditional rendering to check if 'weatherData', 'location', and 'current' exist */}
      {weatherData && weatherData.location && weatherData.current && (
        <div>
          {/* Displaying the city name */}
          <h2>Weather in {weatherData.location.name}</h2>
          {/* Displaying the temperature */}
          <p>Temperature: {weatherData.current.temperature} °C</p>
          {/* Displaying the first weather description */}
          <p>Weather: {weatherData.current.weather_descriptions[0]}</p>
          {/* Displaying the humidity */}
          <p>Humidity: {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

// Exporting the Weather component to be used in other parts of the app
export default Weather;
