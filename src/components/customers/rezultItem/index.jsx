import React from 'react';
import s from './style.module.scss';
import { RezultSubItem } from '../rezultSubItem';

export let RezultItem = props => {
	return (
		<div className={s.rezultItem}>
			<p className={s.headerItem}>{props.capital}</p>
			<div className={s.rezulstSubList}>
				{props.subList.map((item, i) => (
					<RezultSubItem key={i} ic={item.ic} name={item.name} subHeader={item.subHeader} />
				))}
			</div>
		</div>
	);
};
