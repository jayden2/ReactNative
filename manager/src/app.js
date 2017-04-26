import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import firebaseConfig from '../firebase.json'
import LoginForm from './components/LoginForm'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig)
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App

