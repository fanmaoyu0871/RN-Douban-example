'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

class WebPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<WebView style={styles.webview} source={{uri:this.props.url}} startInLoadingState={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	webview:{
		flex:1,
	}
});


export default WebPage;