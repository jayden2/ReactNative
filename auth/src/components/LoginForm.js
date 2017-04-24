import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	}

	login() {
		const { email, password } = this.state

		this.setState({error: '', loading: true})

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this))
			})
	}

	onLoginSuccess() {
		this.setState({
			error: '',
			loading: false,
			email: '',
			password: ''
		})
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		})
	}

	renderButton() {
		const { loading } = this.state

		if (loading) {
			return <Spinner size="small" />
		}
		return (
			<Button onPress={this.login.bind(this)}>
				Login
			</Button>
		)
	}

	render() {
		const { errorTextStyle } = styles

		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						secureTextEntry
						value={this.state.email}
						placeholder="example@email.com"
						keyboardType={'email-address'}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				
				<CardSection>
					<Input
						label="Password"
						secureTextEntry
						value={this.state.password}
						placeholder="password"
						keyboardType={'default'}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				
				<Text style={errorTextStyle}>{ this.state.error }</Text>

				<CardSection>
					{ this.renderButton() }
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;
