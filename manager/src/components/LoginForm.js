import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {	
	onEmailChange(text) {
		this.props.emailChanged(text)
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	onLoginUser() {
		const { email, password } = this.props

		this.props.loginUser({ email, password })
	}
	
	render() {
		const { email, password } = this.props

		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="john@email.com"
						onChangeText={ this.onEmailChange.bind(this) }
						value={ email }
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={ this.onPasswordChange.bind(this) }
						value={ password }
					/>
				</CardSection>

				<CardSection>
					<Button
						onPress={this.onLoginUser.bind(this)}
					>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	}
}

const actions = {
	emailChanged,
	passwordChanged,
	loginUser
}

export default connect(mapStateToProps, actions)(LoginForm)
