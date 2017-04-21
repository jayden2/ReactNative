import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
	<View style={styles.container}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

const styles = {
	container: {
		flex: 1
	}
};

AppRegistry.registerComponent('albums', () => App);
