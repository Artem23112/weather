import FavoritePlaces from '../FavoritePlaces/FavoritePlaces'
import SearchField from '../SearchField/SearchField'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import styles from './WeatherApp.module.scss'

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
			<FavoritePlaces />
		</div>
	)
};

export default Weather;