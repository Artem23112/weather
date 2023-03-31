import React from 'react';
import FavouritePlaces from '../FavouritePlaces/FavouritePlaces';
import SearchField from '../SearchField/SearchField';
import styles from './WeatherApp.module.scss';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

type tabInfoT = {
	id: number
	name: string
};
export type tabsInfoT = Array<tabInfoT>;

interface WeatherProps { };

const Weather = (props: WeatherProps) => {
	const tabsInfo = [
		{ id: 1, name: 'Now' },
		{ id: 2, name: 'Details' },
		{ id: 3, name: 'Forecast' }
	];

	return (
		<div className={styles['weather']}>
			<SearchField />
			<WeatherInfo tabsInfoList={tabsInfo} />
			<FavouritePlaces />
		</div>
	)
};

export default Weather;