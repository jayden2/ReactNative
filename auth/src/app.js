import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

const config = require('../config.json')

class App extends Component {
	state = {
		loggedIn: null,
		headerText: ''
	}

	componentWillMount() {
		firebase.initializeApp(config);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true, headerText: 'Application' })
			} else {
				this.setState({ loggedIn: false, headerText: 'Authentication' })
			}
		})
	}

	renderContent() {
		const { loggedIn } = this.state

		switch(loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>Logout</Button>
						</CardSection>
					</Card>
				)

			case false:
				return <LoginForm />
			
			default:
				return	<Spinner />
		}		
	}

	render() {
		const { headerText } = this.state

		return (
			<View>
				<Header headerText={headerText} />
				{ this.renderContent() }
			</View>
		);
	}
}

const styles = {
	spinnerView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default App;
