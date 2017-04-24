import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	}

	render() {
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
				
				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm;
