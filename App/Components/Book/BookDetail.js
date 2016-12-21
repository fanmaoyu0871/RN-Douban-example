'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import BookCell from './BookCell';

class BookDetail extends Component {
  render() {
    return (
      <ScrollView style={[styles.flex, styles.topMargin, styles.bottomMargin]}>
      	<BookCell rowData={this.props.rowData}/>
      	<Text style={styles.section0}>
      	  图书简介
      	</Text>
      	<Text style={styles.section0_row}>
      	  {this.props.rowData.catalog}
      	</Text>
      	<Text style={styles.section1}>
      	  作者简介
      	</Text>
      	<Text style={styles.section1_row}>
      	  {this.props.rowData.author_intro}
      	</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	flex:{
		flex:1
	},
	topMargin:{
		marginTop:64,
	},
	bottomMargin:{
		marginBottom:49,
	},
	section0:{
		paddingTop:5,
		fontSize:16,
		paddingLeft:5,
		fontWeight:'bold',
	},
	section0_row:{
		paddingLeft:5,
		fontSize:12,
	},
	section1:{
		paddingTop:5,
		fontSize:16,
		fontWeight:'bold',
		paddingLeft:5,
	},
	section1_row:{
		paddingLeft:5,
		fontSize:12,
	}
});


export default BookDetail;