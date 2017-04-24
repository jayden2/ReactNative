import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
	state = {
		username: '',
		password: ''
	}

	render() {
		const { inputStyle } = styles

		return (
			<Card>
				<CardSection>
					<TextInput
						value={this.state.username}
						onChangeText={username => this.setState({ username })}
						style={inputStyle}
					/>
				</CardSection>
				
				<CardSection />
				
				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	inputStyle: {
		height: 40,
		width: 100,
	}
}

export default LoginForm;
