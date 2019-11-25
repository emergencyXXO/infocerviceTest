import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { Aside } from './components/aside';
import Customers from './components/customers';
import { connect } from 'react-redux';

function App(props) {
	const [height, setHeight] = useState(0);
	const header = useRef(null);
	const headerCont = useRef(null);
	const filterField = useRef(null);
	let rezultListHeight;
	useEffect(
		() => {
			rezultListHeight =
				window.innerHeight -
				header.current.clientHeight -
				headerCont.current.clientHeight -
				filterField.current.clientHeight -
				100 -
				28 -
				15;

			setHeight(rezultListHeight);
		},
		[header, filterField, headerCont, props.filters],
	);

	return (
		<div className="App">
			<div className="container-fluide">
				<div className="main">
					<Aside />
					<div className="content">
						<Header header={header} />
						<Switch>
							<Route
								path="/"
								render={() => (
									<Customers
										rezultListHeight={height}
										headerCont={headerCont}
										filterField={filterField}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	filters: state.app.filters,
});

export default connect(
	mapStateToProps,
	{},
)(App);
