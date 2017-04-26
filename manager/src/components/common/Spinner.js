import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

class Spinner extends Component {
	render() {
		const { spinnerStyle } = styles
		const { size } = this.props

		return (
			<View style={spinnerStyle}>
				<ActivityIndicator size={size || 'large' } />
			</View>
		)
	}
}

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export { Spinner }
