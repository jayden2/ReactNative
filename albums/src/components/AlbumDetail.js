import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
	state = {
		album: {}
	}

	render() {
		const { title, artist, thumbnail_image, image, url } = this.props.album;
		const { headerContent, thumbnailContent, thumbnailContainer, headerText, albumImage } = styles;

		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainer}>
						<Image style={thumbnailContent} source={{ uri: thumbnail_image }} />
					</View>
					<View style={headerContent}>
						<Text style={headerText}>{ title }</Text>
						<Text>{ artist }</Text>
					</View>
				</CardSection>
				
				<CardSection>
					<Image style={albumImage} source={{ uri: image }} />
				</CardSection>
				
				<CardSection>
					<Button onPress={() => Linking.openURL(url)}>Buy Now!</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerText: {
		fontSize: 18,

	},
	thumbnailContent: {
		height: 50,
		width: 50
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumImage: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
