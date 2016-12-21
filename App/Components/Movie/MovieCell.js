'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import Utils from '../../Common/Utils';

class MovieCell extends Component {
  render() {

  	var names = [];
  	this.props.rowData.casts.map((data)=>{
  		var str = data.name + '/';
  		names.push(str);
  	});

  	var types = [];
  	this.props.rowData.genres.map((data)=>{
  		var str = data + ' ';
  		types.push(str);
  	});

    return (
      <View style={styles.container}>
      	<View style={styles.left}>
      		<Image style={{width:80, height:110}} source={{uri: this.props.rowData.images.medium}} />
      	</View>
      	<View style={styles.right}>
      		<Text numberOfLines={1} style={[styles.row0, styles.leftPadding]}>名称：{this.props.rowData.title}</Text>
      		<Text numberOfLines={1} style={[styles.leftPadding]}>演员：{names}</Text>
      		<Text numberOfLines={1} style={[styles.leftPadding]}>评分：{this.props.rowData.rating.average}</Text>
      		<Text numberOfLines={1} style={[styles.leftPadding]}>时间：{this.props.rowData.year}</Text>
      		<Text numberOfLines={1} style={[styles.leftPadding]}>标签：{types}</Text>
      		<TouchableHighlight
      		  onPress={this.props.onPress}
      		  style={styles.btn}>
      		  <Text style={styles.text}>详情</Text>
      		</TouchableHighlight>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		height:150,
		borderBottomWidth:Utils.pixel,
		borderColor:'gray',
	},
	row0:{
		marginTop:20,
	},
	leftPadding:{
		paddingLeft:10,
	},
	left:{
		width:100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	right:{
		flex:1,
		marginRight:10,
	},
	btn:{
		width:60,
		marginTop:5,
		marginLeft:30,
		borderWidth:Utils.pixel,
		borderColor:'#63B8FF',
		borderRadius:5,
	},
	text:{
		textAlign:'center',
		padding:5,
	}
});


export default MovieCell;