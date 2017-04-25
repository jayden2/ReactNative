import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
	render() {
		const { id, title, description } = this.props.library

		return (
			<CardSection key={id}>
				<Text>{ title }</Text>
			</CardSection>
		)
	}
}

export default ListItem
