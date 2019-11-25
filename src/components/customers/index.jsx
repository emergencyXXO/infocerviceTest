import React, { useState, useRef, useEffect } from 'react';
import s from './style.module.scss';
import { RezultItem } from './rezultItem';
import { Redirect, Route, Switch } from 'react-router-dom';
import Filter from '../filter';
import { connect } from 'react-redux';
import { DelFilter } from '../../reducers/AppReducer';
let Customers = props => {
	let data = [
		{
			capital: 'A',
			subItem: [
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'AA',
					name: 'Glenda A',
					subHeader: 'Pharmacist',
				},
			],
		},
		{
			capital: 'B',
			subItem: [
				{
					ic: 'BB',
					name: 'Barbara B',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'BB',
					name: 'Barbara B',
					subHeader: 'Pharmacist',
				},
			],
		},
		{
			capital: 'C',
			subItem: [
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'CD',
					name: 'Cindy K',
					subHeader: 'Pharmacist',
				},
			],
		},
		{
			capital: 'D',
			subItem: [
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
				{
					ic: 'DB',
					name: 'Debby D',
					subHeader: 'Pharmacist',
				},
			],
		},
	];
	const [active, setActive] = useState(false);
	const [lineW, setLineW] = useState(0);
	const line = useRef(null);
	let lineWidth;
	useEffect(
		() => {
			lineWidth = -line.current.clientWidth;
			setLineW(lineWidth);
		},
		[line],
	);

	return (
		<>
			{active ? <Redirect to={'/filter'} /> : <Redirect to={'/'} />}
			<div className={s.wrap}>
				<div className={s.header} ref={props.headerCont}>
					<div className={s.line} ref={line}>
						<p className={s.had}>customers (Kol / hcp / advocacy / other)</p>
						<span className={s.plus}>+</span>
					</div>
					<div
						className={`${s.nav} ${active && s.active} `}
						style={{ transform: active && `translate(${lineW}px, 40px)` }}
					>
						<button
							form="form"
							className={`${s.filter} ${active && s.active}`}
							onClick={() => setTimeout(() => setActive(!active), 100)}
						>
							<svg
								className={s.ic}
								enableBackground="new 0 0 26 26"
								version="1.1"
								viewBox="0 0 26 26"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path
										d="M1.75,7.75h6.6803589c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891   S13.9000854,9.0452271,14.2356567,7.75H24.25C24.6640625,7.75,25,7.4140625,25,7s-0.3359375-0.75-0.75-0.75H14.2356567   c-0.3355713-1.2952271-1.5039063-2.2587891-2.9026489-2.2587891S8.7659302,4.9547729,8.4303589,6.25H1.75   C1.3359375,6.25,1,6.5859375,1,7S1.3359375,7.75,1.75,7.75z M11.3330078,5.4912109   c0.8320313,0,1.5087891,0.6767578,1.5087891,1.5087891s-0.6767578,1.5087891-1.5087891,1.5087891S9.8242188,7.8320313,9.8242188,7   S10.5009766,5.4912109,11.3330078,5.4912109z"
										fill="#846493"
									/>
									<path
										d="M24.25,12.25h-1.6061401c-0.3355713-1.2952271-1.5039063-2.2587891-2.9026489-2.2587891   S17.1741333,10.9547729,16.838562,12.25H1.75C1.3359375,12.25,1,12.5859375,1,13s0.3359375,0.75,0.75,0.75h15.088562   c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891s2.5670776-0.963562,2.9026489-2.2587891H24.25   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,12.25,24.25,12.25z M19.7412109,14.5087891   c-0.8320313,0-1.5087891-0.6767578-1.5087891-1.5087891s0.6767578-1.5087891,1.5087891-1.5087891S21.25,12.1679688,21.25,13   S20.5732422,14.5087891,19.7412109,14.5087891z"
										fill="#846493"
									/>
									<path
										d="M24.25,18.25H9.7181396c-0.3355103-1.2952271-1.5037842-2.2587891-2.9017334-2.2587891   c-1.3987427,0-2.5670776,0.963562-2.9026489,2.2587891H1.75C1.3359375,18.25,1,18.5859375,1,19s0.3359375,0.75,0.75,0.75h2.1637573   c0.3355713,1.2952271,1.5039063,2.2587891,2.9026489,2.2587891c1.3979492,0,2.5662231-0.963562,2.9017334-2.2587891H24.25   c0.4140625,0,0.75-0.3359375,0.75-0.75S24.6640625,18.25,24.25,18.25z M6.8164063,20.5087891   c-0.8320313,0-1.5087891-0.6767578-1.5087891-1.5087891s0.6767578-1.5087891,1.5087891-1.5087891   c0.8310547,0,1.5078125,0.6767578,1.5078125,1.5087891S7.6474609,20.5087891,6.8164063,20.5087891z"
										fill="#846493"
									/>
								</g>
							</svg>
							<p>Refine</p>
						</button>

						<div className={s.search}>
							<svg className={s.ic} enableBackground="new 0 0 48 48" version="1.1" viewBox="0 0 48 48">
								<path d="M46.7,45.3L33.4,32c2.9-3.2,4.6-7.4,4.6-12c0-9.9-8.1-18-18-18C10.1,2,2,10.1,2,20c0,9.9,8.1,18,18,18c4.6,0,8.8-1.8,12-4.6  l13.3,13.3L46.7,45.3z M4,20c0-8.8,7.2-16,16-16s16,7.2,16,16s-7.2,16-16,16S4,28.8,4,20z" />
							</svg>
						</div>
					</div>
				</div>
				<div className={s.filterField} ref={props.filterField}>
					{props.filters &&
						props.filters.map((el, i) => (
							<div key={i} className={s.filterItem}>
								<p className={s.name}>{Object.keys(el)}:</p>
								<p className={s.val}> {el[Object.keys(el)]}</p>
								<svg
									onClick={() => {
										props.DelFilter(Object.keys(el)[0]);
										console.log(Object.keys(el)[0]);
									}}
									className={s.ic}
									enableBackground="new 0 0 32 32"
									height="32px"
									version="1.1"
									viewBox="0 0 32 32"
									width="32px"
								>
									<path
										d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
										fill="#121313"
										id="Close"
									/>
									<g />
									<g />
									<g />
									<g />
									<g />
									<g />
								</svg>
							</div>
						))}
				</div>

				<Switch>
					<Route path="/filter" render={() => <Filter />} />
					<Route
						path="/"
						exact
						render={() => (
							<div className={s.rezultList} style={{ height: props.rezultListHeight }}>
								{data.map((item, i) => (
									<RezultItem key={i} capital={item.capital} subList={item.subItem} />
								))}
							</div>
						)}
					/>
				</Switch>
			</div>
		</>
	);
};
const mapStateToProps = state => ({
	filters: state.app.filters,
});

export default connect(
	mapStateToProps,
	{
		DelFilter,
	},
)(Customers);
