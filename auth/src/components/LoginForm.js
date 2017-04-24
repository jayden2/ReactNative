import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: ''
	}

	login() {
		const { email, password } = this.state

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({error: 'Authentication Failed.'})
					})
			})
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
					<Button onPress={this.login.bind(this)}>
						Login
					</Button>
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
