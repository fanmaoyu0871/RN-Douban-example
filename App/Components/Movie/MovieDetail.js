'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import WebPage from '../../Common/WebPage';

class MovieDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<WebPage url={this.props.url}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:64,
		marginBottom:49,
	}
});


export default MovieDetail;