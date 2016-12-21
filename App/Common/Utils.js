'use strict';

import React, { Component } from 'react';

import {
  Dimensions,
  PixelRatio,
  ActivityIndicator
} from 'react-native';

const screen = Dimensions.get('window');

const Utils = {
	size:{
		width:screen.width,
		height:screen.height
	},

	pixel:1/PixelRatio.get(),

	loadingView:<ActivityIndicator style={{marginTop:60}} color='black'/>,
};



export default Utils;