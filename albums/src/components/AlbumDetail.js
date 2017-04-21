import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	state = {
		album: {}
	}

	render() {
		const { title, artist } = this.props.album;
		const { headerContent } = styles;

		return (
			<Card>
				<CardSection>
					<View>

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
