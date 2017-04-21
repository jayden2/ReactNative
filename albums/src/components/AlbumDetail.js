import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	state = {
		album: {}
	}

	render() {
		const { title, artist, thumbnail_image } = this.props.album;
		const { headerContent } = styles;

		console.log(thumbnail_image);

		return (
			<Card>
				<CardSection>
					<View>
						<Image source={{ uri: thumbnail_image }} />
					</View>
					<View style={headerContent}>
						<Text>{ title }</Text>
						<Text>{ artist }</Text>
					</View>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
};

export default AlbumDetail;
