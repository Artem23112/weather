import React, { useState } from 'react';
import styles from './SearchField.module.scss';
import searchIcon from '../../assets/search.svg';

interface SearchFieldProps { };

const SearchField = (props: SearchFieldProps) => {
	const [value, setValue] = useState('');
	return (
		<form className={styles['search-field']}>
			<input
				className={styles['search-field__input']}
				type="text"
				value={value}
				onChange={(e) => { setValue(e.target.value) }}
			/>
			<button className={styles['search-field__bth']} type='submit'>
				<img className={styles['search-field__icon']} src={searchIcon} />
			</button>
		</form>
	)
};

export default SearchField;