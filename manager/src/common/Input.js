import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'

class Input extends Component {
	render() {
		const { label, placeholder, keyboardType, secureTextEntry, value, onChangeText } = this.props
		const { inputStyle, labelStyle, containerStyle } = styles

		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{ label }</Text>
				<TextInput
					secureTextEntry={secureTextEntry}
					keyboardType={keyboardType}
					placeholder={placeholder}
					autoCorrect={false}
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
				/>
			</View>
		)
	}
}

styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 3
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export { Input }
