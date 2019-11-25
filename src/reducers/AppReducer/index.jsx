const ADD_FILTER = 'ADD_FILTER';
const DEL_FILTER = 'DEL_FILTER';

let InitialState = {
	initialized: false,
	filters: [],
};

let AppReducer = (state = InitialState, action) => {
	switch (action.type) {
		case ADD_FILTER:
			return {
				...state,
				filters: [...state.filters, { [action.key]: action.filterVal }],
			};
		case DEL_FILTER:
			return {
				...state,
				filters: state.filters.filter(e => Object.keys(e)[0] !== action.filterKey),
			};
		default:
			return state;
	}
};

export const AddFilter = (filterVal, key) => ({
	type: ADD_FILTER,
	filterVal,
	key,
});
export const DelFilter = filterKey => ({
	type: DEL_FILTER,
	filterKey,
});

export default AppReducer;
