'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import Utils from '../../Common/Utils';

class BookCell extends Component {
  render() {

  	let data = this.props.rowData;
    return (
    	<TouchableHighlight
    	  onPress={this.props.onPress}
    	  underlayColor='gray'>
		      <View style={styles.container}>
		      	<Image style={styles.left} source={{uri:data.image}}/>
		      	<View style={styles.right}>
		      		<Text style={[styles.name, styles.padding]}>
		      		  	{data.title}
		      		</Text>
		      		<Text style={[styles.publish, styles.padding]}>
		      		  	{data.publisher}
		      		</Text>
		      		<Text numberOfLines={1} style={[styles.author, styles.padding]}>
		      		  	{data.author}
		      		</Text>
		      		<Text style={[styles.price, styles.padding]}>
		      		  	{data.price}
		      		</Text>
		      	</View>
		      </View>
    	</TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		height:150,
		flexDirection:'row',
		alignItems:'center',
		borderBottomWidth:Utils.pixel,
		borderColor:'gray',
	},
	left:{
		width:80,
		height:100,
		marginLeft:20,
	},
	right:{
		flex:1,
		marginLeft:10,
	},
	name:{
		fontSize:20,
		fontWeight:'bold',
	},
	publish:{
		fontSize:14,
	},
	author:{
		fontSize:14,
	},
	price:{
		fontSize:20,
		color:'green',
	},
	padding:{
		padding:3,
	}
});


export default BookCell;