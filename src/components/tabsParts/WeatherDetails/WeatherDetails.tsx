import React from 'react';
import styles from './WeatherDetails.module.scss';

interface WeatherDetailsProps {
	name: string
	currentTabName: string
};

const WeatherDetails = (
	{ name, currentTabName }: WeatherDetailsProps
) => {
	
	return (
		<div className={`${styles['weather-details']} ${name === currentTabName ? styles['active'] : ''}`}>
			Details
		</div>
	)
};

export default WeatherDetails;