import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
	renderDescription() {
		const { library, expanded } = this.props

		if (expanded) {
			return (
				<CardSection>
					<Text>{ library.description }</Text>
				</CardSection>
			)
		}
	}

	render() {
		const { id, title, description } = this.props.library
		const { selectLibrary } = this.props
		const { titleStyle } = styles

		return (
			<TouchableWithoutFeedback
				onPress={() => selectLibrary(id)}
				key={id}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{ title }</Text>
					</CardSection>
					{ this.renderDescription() }
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id

	return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
