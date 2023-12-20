import React, { useState } from 'react'; // Import React and useState hook

function Weather() {
  const [city, setCity] = useState(''); // State for storing user input city
  const [weatherData, setWeatherData] = useState(null); // State for storing weather data

  // Function to update the city state as the user types
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeather = async () => {
    if (!city) return; // If no city is entered, exit the function
    const apiKey = '4bcd8591931f97215d7b45892b6d0133'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url); // Fetching weather data from API
      const data = await response.json(); // Parsing the JSON response
      if (data.cod !== 200) {
        throw new Error(data.message); // Throw an error if response is not successful
      }
      setWeatherData(data); // Update the weatherData state with the fetched data
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); // Reset weather data on error
    }
  };

  // Render the weather component UI
  return (
    <div>
      <input // Input field for entering city name
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button> // Button to trigger weather data fetch
      {weatherData && ( // Conditional rendering of weather data
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather; // Export the Weather component
