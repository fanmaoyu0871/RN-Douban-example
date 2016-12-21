'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import Utils from './Utils';

class Search extends Component {
  render() {
    return (
    	
      <View style={styles.container}>
     	<TextInput {...this.props} style={styles.textInput}/>
     	<TouchableOpacity style={styles.button}
     	  onPress={this.props.searchAction}>
	     	  <Text style={styles.txt}>
	     	    搜索
	     	  </Text>
     	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
	},
	textInput:{
		flex:1,
		paddingLeft:5,
		borderWidth:Utils.pixel,
		borderColor:'#DDD',
		borderRadius:5
	},
	button:{
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'#63B8FF',
		marginLeft:-5,
	},
	txt:{
		width:60,
		textAlign:'center',
		color:'white',
	}
});


export default Search;