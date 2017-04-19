import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	state = {
		album: {}
	}

	render() {
		const { title } = this.props.album;

		return (
			<Card>
				<CardSection>
					<Text>{ title }</Text>
				</CardSection>
			</Card>
		);
	}
}

export default AlbumDetail;
