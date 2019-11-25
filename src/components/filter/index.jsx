import React from 'react';
import s from './style.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, MyDatePicker, MySelect } from './input';
import { AddFilter } from '../../reducers/AppReducer';

let FilterForm = props => {
	return (
		<div className={s.wrapFilter}>
			<form id="form" className={s.filter} onSubmit={props.handleSubmit}>
				<Field
					className={s.filterItem}
					name="Arranged by"
					component={MySelect}
					type="text"
					myplaceholder="Arranged by"
				/>
				<Field className={s.filterItem} name="Name" component={Input} type="text" myplaceholder="Name" />
				<Field className={s.filterItem} name="Title" component={Input} type="text" myplaceholder="title" />
				<Field className={s.filterItem} name="Company" component={Input} type="text" myplaceholder="company" />
				<Field
					className={s.filterItem}
					name="Country"
					component={MySelect}
					type="text"
					myplaceholder="country"
				/>
				<Field className={s.filterItem} name="State" component={MySelect} type="text" myplaceholder="state" />
				<Field
					className={s.filterItem}
					name="Last engagement date from"
					component={MyDatePicker}
					type="text"
					myplaceholder="Last engagement date from"
				/>
				<Field
					className={s.filterItem}
					name="Last engagement date to"
					component={MyDatePicker}
					type="text"
					myplaceholder="Last engagement date to"
				/>
				<Field className={s.filterItem} name="Event" component={MySelect} type="text" myplaceholder="event" />
				<Field className={s.filterItem} name="Core" component={MySelect} type="text" myplaceholder="core col" />
				<Field className={s.filterItem} name="Target" component={MySelect} type="text" myplaceholder="target" />
				<Field
					className={s.filterItem}
					name="Account"
					component={MySelect}
					type="text"
					myplaceholder="account type"
				/>
				<Field
					className={s.filterItem}
					name="Teritory"
					component={Input}
					type="text"
					myplaceholder="teritory"
				/>
			</form>
		</div>
	);
};

const FilterReduxForm = reduxForm({
	form: 'FilterFrom',
})(FilterForm);

const Filter = props => {
	const onSubmit = formData => {
		Object.keys(formData).map(key => {
			return props.AddFilter(formData[key], key);
		});
	};

	return <FilterReduxForm {...props} onSubmit={onSubmit} />;
};
const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ AddFilter },
)(Filter);
