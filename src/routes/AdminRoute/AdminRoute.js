import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../../components/Button/Button';
import UserApiService from '../../services/user-api-service';
import UserInfo from '../../components/Admin/UserInfo';
import './AdminRoute.css';

class AdminRoute extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	componentDidMount() {
		this.context.clearError();
		UserApiService.getUsers()
			.then(this.context.setUsersList)
			.catch(this.context.setError);
	}

	handleDeleteUser = () => {
		this.componentDidMount();
	};

	handleLogoutClick = (e) => {
		this.context.processLogout();
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/login';
		history.push(destination);
	};

	renderUsersList() {
		const { users = [] } = this.context;
		return users.map((user) => (
			<UserInfo
				key={user.id}
				user={user}
				onDeleteUser={this.handleDeleteUser}
			/>
		));
	}

	render() {
		const { error } = this.context;
		return (
			<section>
				<div className="logout-button">
					<p>Logged in as {this.context.user.name}</p>
				</div>
				<div>
					<h2>Admin</h2>
					<ul>
						{error ? (
							<p className="red">There was an error, try again</p>
						) : (
							this.renderUsersList()
						)}
					</ul>
				</div>
			</section>
		);
	}
}

export default AdminRoute;
