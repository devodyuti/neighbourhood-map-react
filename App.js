import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import { TabNavigator } from 'react-navigation';
import Map from './src/Map';
import Query from './src/Query';
import LoginForm from './src/LoginForm';
import FoodMenu from './src/FoodMenu';

export default class App extends React.Component {
  
  render() {
    const MainNavigator = TabNavigator({
      login:{screen: LoginForm},
      map:{screen: Map},
      query:{screen: Query},
      menu:{screen:FoodMenu}
      })
      
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
