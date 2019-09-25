import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState] ? icons[weatherState] : "day-sunny";
    return <WeatherIcons name={icon} size="2x"/>;
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>
            {`${temperature} C°` }
        </span>
    </div>
);

export default WeatherTemperature;