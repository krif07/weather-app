import React from 'react';
import WeatherLocation from './components/weatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <WeatherLocation></WeatherLocation>
      </header>
    </div>
  );
}

export default App;
