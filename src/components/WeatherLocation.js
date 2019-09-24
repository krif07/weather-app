import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Pereira, "}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;