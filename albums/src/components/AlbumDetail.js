import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';

class AlbumDetail extends Component {
	state = {
		album: {}
	}

	render() {
		const { title } = this.props.album;

		return (
			<Card>
				<Text>{ title }</Text>
			</Card>
		);
	}
}

export default AlbumDetail;
