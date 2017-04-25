import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
	componentWillUpdate() {
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
		LayoutAnimation.spring()
	}

	renderDescription() {
		const { library, expanded } = this.props

		if (expanded) {
			return (
				<CardSection>
					<Text style={styles.descriptionStyle}>{ library.description }</Text>
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
	},
	descriptionStyle: {
		flex: 1,
		paddingLeft: 16,
		paddingRight: 16
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id

	return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
