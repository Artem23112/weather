import { useState } from 'react'
import { tabsInfoT } from '../WeatherApp/WeatherApp'
import TabButtons from '../tabsParts/TabButtons/TabButtons'
import WeatherDetails from '../tabsParts/WeatherDetails/WeatherDetails'
import WeatherForecast from '../tabsParts/WeatherForecast/WeatherForecast'
import WeatherNow from '../tabsParts/WeatherNow/WeatherNow'
import styles from './WeatherInfo.module.scss'

interface WeatherInfoProps {
	tabsInfoList: tabsInfoT
};

export const WeatherInfo = (
	{ tabsInfoList }: WeatherInfoProps
) => {

	const [currentTab, setCurrentTab] = useState(() => tabsInfoList[0].name);

	return (
		<div className={styles['weather-info']}>
			<>
				<WeatherNow
					name={'Now'}
					currentTabName={currentTab}
				>
					<h2 className="now-degrees">14</h2>
					<img src="" alt="иконка погоды" />
					<div className="now-wrapper">
						<h2 className="now-city">City</h2>
						<span className="now-favorite-icon">
							<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z" stroke="black" strokeWidth="2" />
							</svg>
						</span>
					</div>
				</WeatherNow>
				<WeatherDetails
					name={'Details'}
					currentTabName={currentTab}
				></WeatherDetails>
				<WeatherForecast
					name={'Forecast'}
					currentTabName={currentTab}
				></WeatherForecast>
			</>
			<TabButtons
				tabsInfoList={tabsInfoList}
				currentTab={currentTab}
				setTab={setCurrentTab}
			/>
		</div>
	)
};

export default WeatherInfo;