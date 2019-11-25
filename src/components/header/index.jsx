import React from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
export let Header = props => {
	return (
		<header ref={props.header}>
			<svg
				className={s.ic}
				enableBackground="new 0 0 512 512"
				height="512"
				viewBox="0 0 512 512"
				width="512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="m457 24h-402c-30.327 0-55 24.673-55 55v268c0 30.327 24.673 55 55 55h113v12.271c0 10.739-6.838 20.261-17.015 23.691l-38.663 13.032c-8.862 2.985-14.195 11.851-12.683 21.079 1.513 9.228 9.398 15.926 18.75 15.926h275.961c9.366 0 17.254-6.71 18.755-15.955s-3.858-18.106-12.746-21.07l-39.266-13.088c-10.224-3.407-17.093-12.939-17.093-23.716v-12.17h113c30.327 0 55-24.673 55-55v-268c0-30.327-24.673-55-55-55zm0 348h-402c-13.785 0-25-11.215-25-25v-25h452v25c0 13.785-11.215 25-25 25zm-121.247 86h-159.379c13.375-10.203 21.626-26.23 21.626-43.729v-12.271h116v12.17c0 17.572 8.3 33.637 21.753 43.83zm-305.753-166v-213c0-13.785 11.215-25 25-25h402c13.785 0 25 11.215 25 25v213zm91.902 187.425c.001 0 .001-.001 0 0l.017-.006c-.005.002-.011.004-.017.006z" />
			</svg>
			<div className={s.breadCrumbs}>
				<Link to="/" className={s.active}>
					CNS 2019
				</Link>
				<Link to="/">October 23 - 26 , 2019</Link>
				<Link to="/">Charlotte convention Center</Link>
				<Link to="/">Charlotte, NC</Link>
			</div>
		</header>
	);
};
