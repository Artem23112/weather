import React from 'react';
import TabButton from '../TabButton/TabButton';
import { tabsInfoT } from '../../WeatherApp/WeatherApp';
import styles from './TabButtons.module.scss';

interface TabButtonsProps {
	tabsInfoList: tabsInfoT
	setTab: React.Dispatch<React.SetStateAction<string>>
	currentTab: string
};

const TabButtons = (
	{ tabsInfoList, setTab, currentTab }: TabButtonsProps
) => {
	
	const changeCurrentTab = (name: string) => {
		if(name === currentTab) return;
		
		setTab(name);
	}

	return (
		<div className={styles['tab-buttons']}>
			{
				tabsInfoList.map(info => (
					<TabButton
						key={info.id}
						name={info.name}
						currentTabName={currentTab}
						changeTab={changeCurrentTab}
					>
						{info.name}
					</TabButton>
				))
			}
		</div>
	)
};

export default TabButtons;