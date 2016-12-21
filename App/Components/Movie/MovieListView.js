'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  ListView
} from 'react-native';

import Search from '../../Common/Search';
import MovieCell from './MovieCell';
import Api from '../../Common/Api';
import Utils from '../../Common/Utils';
import MovieDetail from './MovieDetail';

class MovieListView extends Component {
 constructor(props) {
	  super(props);

	  this.state = {
	  	isLoading:true,
	  	searchText:'Game of Thrones',
	  	dataSource:new ListView.DataSource({rowHasChanged:(row1, row2)=>{row1 !== row2}}),
	  };
	}

	componentWillMount() {
	  	this._getData.bind(this)();
	}

	_getData(){
		let baseURL = Api.movie_search + '?count=10&q=' + this.state.searchText;
		let that = this;
		Api.GET_Method(baseURL, (json)=>{
			that.setState({isLoading:false,dataSource:that.state.dataSource.cloneWithRows(json.subjects)});
		}, (error)=>{
			alert(error);
			that.setState({isLoading:false});
		});
	}

  _bookSearchAction(){
  	if(this.state.searchText.length() <= 0)
  		return;

  	const text = this.state.searchText;
  	this.setState({
  		isLoading:true 
  	});

  	this._getData.bind(this)();
  }

  _renderRow(rowData){
  	return (<MovieCell rowData={rowData} onPress={()=>{
  				this.props.navigator.push({name:'movie_detail', component:MovieDetail, 
  						params:{url:rowData.alt, title:rowData.title}});
  			}}/>);
  }

  render() {
    return (
    	<ScrollView style={styles.flex}>
    		<View style={styles.searchView}>
    			<Search  placeholder='请输入电影名称' 
    					 onChangeText={(text)=>{
		    					this.setState({
		    						searchText:text 
		    					});
		    				}} 
    					searchAction={this._bookSearchAction.bind(this)}/>
    		</View>
    		{
    			this.state.isLoading?
    				Utils.loadingView :
    				<ListView style={styles.flex} dataSource={this.state.dataSource} 
    				renderRow={this._renderRow.bind(this)}/>
    		}
    	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	flex:{
		flex:1,
	},
	searchView:{
		marginTop:64,
		marginLeft:10,
		marginRight:10,
		height:40,
	}
});


export default MovieListView;