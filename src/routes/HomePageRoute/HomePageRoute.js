import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './HomePageRoute.css';
// import Rewolf from '../../images/RewolfLogo.jpg';

class LearnRoute extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	render() {
		return (
			<div className="Home_page">
				<main className="main">
					<div className="Home_page-discovery">
						<h2>Discovery</h2>
						<p>
							Click on the link below to answer discovery questions so we can
							help grow your business.
						</p>
						<Link to="/discovery">Help us help you!</Link>
					</div>
					<img src="static/img/RewolfLogo.jpg" className="Rewolf" alt="" />

					<div className="Change">
						<h2>Click on the link below to change your password.</h2>
						<Link to="/change">Change your password</Link>
					</div>
				</main>
			</div>
		);
	}
}

export default LearnRoute;
