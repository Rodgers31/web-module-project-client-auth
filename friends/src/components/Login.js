import React, { Component } from 'react';
import axios from 'axios';

export default class login extends Component {
	state = {
		credentils: {
			username: '',
			password: '',
		},
	};
	handleChange = (e) => {
		this.setState({
			credentils: {
				...this.state.credentils,
				[e.target.name]: e.target.value,
			},
		});
	};

	login = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', this.state.credentils)
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.payload);
				localStorage.setItem('username', res.data.username);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type='text'
						name='username'
						value={this.state.credentils.username}
						placeholder='username'
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						value={this.state.credentils.password}
						placeholder='password'
						onChange={this.handleChange}
					/>
					<button>Login</button>
				</form>
			</div>
		);
	}
}
