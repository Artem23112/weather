import React from 'react';
import styles from './TabButton.module.scss';

interface TabButtonProps {
	children: string
	currentTabName: string
	name: string
	changeTab: (name: string) => void
};

const TabButton = (
	{ children, currentTabName, name, changeTab }: TabButtonProps
) => {
	return (
		<button
			className={`${styles['tab-button']} ${name === currentTabName ? styles['active'] : ''}`}
			onClick={() => { changeTab(name) }}
		>
			{children}
		</button>
	)
};

export default TabButton;