import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'

class RouterComponent extends Component {
	render() {
		return (
			<Router>
				<Scene key="login" component={LoginForm} title="Login" initial />
			</Router>
		)
	}
}

