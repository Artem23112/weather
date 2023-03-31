import React, { ReactNode } from 'react';
import styles from './WeatherNow.module.scss';

interface WeatherNowProps {
	name: string
	currentTabName: string
	children: Array<ReactNode>
};

const WeatherNow = (
	{ name, currentTabName, children }: WeatherNowProps
) => {

	return (
		<div className={`${styles['weather-now']} ${name === currentTabName ? styles['active'] : ''}`}>
			{children}
		</div>
	)
};

export default WeatherNow;