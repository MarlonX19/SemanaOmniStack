import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Main from './Main';
import MyLikes from './MyLikes';
import MyDislikes from './MyDislikes';
import MenuDrawer from '../components/MenuDrawer';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.74,
    contentComponent: ({ navigation }) => {
      return( <MenuDrawer navigation={navigation} /> )
    }
}

export default SwitchNavs = createDrawerNavigator(
{
    Main : {
        screen: Main
    },

    MyLikes: {
        screen: MyLikes
    },

    MyDislikes: {
        screen: MyDislikes
    },

},
    DrawerConfig
)