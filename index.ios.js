/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar,
  Navigator
} from 'react-native';

import BookListView from './App/Components/Book/BookListView';
import MovieListView from './App/Components/Movie/MovieListView';
import NavigationBarRouteMapperavBar from './App/Common/NavBar';

//hide status bar
StatusBar.setHidden(true);

export default class DoubanApp extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      tabIndex:0,
    };
  }

  render() {
    return (
        <TabBarIOS>
            <TabBarIOS.Item icon={require('image!book')} 
              onPress={()=>{this.setState({tabIndex:0})}}
              selected={this.state.tabIndex === 0}
              title='图书'>
              <Navigator initialRoute={{name:'book_home', component:BookListView, params:{title:'图书'}}}
                  configureScene={(route) => {
                      return Navigator.SceneConfigs.FloatFromBottom;
                  }}
                  renderScene={(route, navigator) => {
                      let Component = route.component;
                      return <Component {...route.params} navigator={navigator} />
                  }}
                  navigationBar={<Navigator.NavigationBar style={{backgroundColor:'white'}} 
                                  routeMapper={NavigationBarRouteMapperavBar}/>}
              />
            </TabBarIOS.Item>
            <TabBarIOS.Item icon={require('image!movie')} 
              onPress={()=>{this.setState({tabIndex:1})}}
              selected={this.state.tabIndex === 1}
              title='电影'>
              <Navigator initialRoute={{name:'movie_home', component:MovieListView, params:{title:'电影'}}}
                  configureScene={(route) => {
                      return Navigator.SceneConfigs.FloatFromBottom;
                  }}
                  renderScene={(route, navigator) => {
                      let Component = route.component;
                      return <Component {...route.params} navigator={navigator} />
                  }}
                  navigationBar={<Navigator.NavigationBar style={{backgroundColor:'white'}} 
                                  routeMapper={NavigationBarRouteMapperavBar}/>}
              />
            </TabBarIOS.Item>
            <TabBarIOS.Item icon={require('image!about')} 
              onPress={()=>{this.setState({tabIndex:2})}}
              selected={this.state.tabIndex === 2}
              title='我'>
              <View></View>
            </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DoubanApp', () => DoubanApp);
