import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import firebaseConfig from '../firebase.json'
import LoginForm from './components/LoginForm'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig)
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App

