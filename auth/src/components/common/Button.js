import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
	render() {
		const { button, buttonText } = styles;
		const { onPress } = this.props;

		return (
			<TouchableOpacity style={button} onPress={onPress}>
				<Text style={buttonText}>{ this.props.children }</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	button: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;
