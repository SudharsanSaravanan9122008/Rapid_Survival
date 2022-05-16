import React, {Component} from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './scripts/screens/Login';
import HomeScreen from './scripts/screens/Home';
import OfflineGameScreen from './scripts/screens/Offline';
import OnlineGameScreen from './scripts/screens/Online';

export default class App extends Component{
  constructor(props){
    super(props);    
  }

  render(){
    return <AppNavigator/>
  }
}

const AppSwitch = createSwitchNavigator({
  login:{
    screen:LoginScreen
  },
  home:{
    screen:HomeScreen
  },
  OfflineGame:{
    screen:OfflineGameScreen
  },
  OnlineGame:{
    screen:OnlineGameScreen
  }
},
{initialRouteName:"home"})

const AppNavigator = createAppContainer(AppSwitch)