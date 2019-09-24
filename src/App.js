import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather App (Aplicación para el clima)
        <WeatherLocation></WeatherLocation>
      </header>
    </div>
  );
}

export default App;
