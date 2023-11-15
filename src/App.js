import React from 'react'; // Importing the React library
import Weather from './Weather'; // Importing the Weather component

// Defining the App component
function App() {
  // This function returns JSX, a syntax similar to HTML
  return (
    <div>
      <h1>Hello, Weather App!</h1> {/* Displaying a header */}
      <Weather /> {/* Including the Weather component */}
    </div>
  );
}

export default App; // Exporting the App component for use in index.js
