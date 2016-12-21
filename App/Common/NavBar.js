'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    // ...
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    // ...
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <View style={styles.navBar}>
        <Text style={styles.text}>
          {route.params.title}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    flex:{
      flex:1
    },
    navBar:{
      backgroundColor:'white',
    },
    text:{
      fontSize:16,
      fontWeight:'bold',
    }
});


module.exports = NavigationBarRouteMapper;

