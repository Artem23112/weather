import React from 'react';
import styles from './WeatherForecast.module.scss';

interface WeatherForecastProps {
	name: string
	currentTabName: string
};

const WeatherForecast = (
	{ name, currentTabName }: WeatherForecastProps
) => {
	
	return (
		<div className={`${styles['weather-forecast']} ${name === currentTabName ? styles['active'] : ''}`}>
			Forecast
		</div>
	)
};

export default WeatherForecast;