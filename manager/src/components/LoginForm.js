import React, { Component } from 'react'
import { Keyboard, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {	
	onEmailChange(text) {
		this.props.emailChanged(text)
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text)
	}

	onLoginUser() {
		const { email, password } = this.props

		Keyboard.dismiss()
		this.props.loginUser({ email, password })
	}

	renderButton() {
		const { loading } = this.props

		if (loading) {
			return <Spinner />
		}
		return <Button	onPress={this.onLoginUser.bind(this)}>Login</Button>
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

				<Text style={styles.errorTextStyle}>
					{ this.props.error }
				</Text>

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

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth

	return { email, password, error, loading }
}

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm)
