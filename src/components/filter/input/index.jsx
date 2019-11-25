import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './style.module.scss';

export let Input = props => {
	return (
		<div className={s.input}>
			<p className={s.placeholder}>{props.myplaceholder}</p>
			<input {...props} onChange={e => props.input.onChange(e.target.value)} type={props.type} />
		</div>
	);
};
export let MyDatePicker = props => {
	const [startDate, setStartDate] = useState(null);

	let handleChange = date => {
		setStartDate(date);
		let newDate = date.toString().split('00:')[0];

		props.input.onChange(newDate);
	};

	return (
		<div className={s.datePicker}>
			<p className={s.placeholder}>{props.myplaceholder}</p>
			<DatePicker {...props} selected={startDate} onChange={handleChange} />
		</div>
	);
};
export let MySelect = props => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];
	const colourStyles = {
		control: styles => ({
			...styles,
			border: '1px solid #ececec',
			borderColor: '#ececec!important',
			boxShadow: 'none!important',
			backgroundColor: '#fdfdfd',
			padding: '0 5px',
			borderRadius: 0,
			width: '100%',
			outline: 'none',
		}),
	};
	const [value, setValue] = useState(null);

	//props.input.onChange(inputValue);
	return (
		<div className={s.input}>
			<p className={s.placeholder}>{props.myplaceholder}</p>
			<Select
				{...props}
				value={value}
				options={options}
				onChange={inputValue => {
					setValue(inputValue);
					props.input.onChange(inputValue.value);
				}}
				placeholder=""
				styles={colourStyles}
			/>
		</div>
	);
};
