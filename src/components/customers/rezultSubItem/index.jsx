import React from 'react';
import s from './style.module.scss';

export let RezultSubItem = props => {
	return (
		<div className={s.rezulstSubItem}>
			<div className={s.wrap}>
				<div className={s.ic}>{props.ic}</div>
				<div className={s.cont}>
					<p className={s.name}>{props.name}</p>
					<p className={s.subHeader}>{props.subHeader}</p>
				</div>
			</div>
		</div>
	);
};
