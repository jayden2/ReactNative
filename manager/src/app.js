import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import firebaseConfig from '../firebase.json'
import Router from './Router'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig)
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App

