<<<<<<< HEAD
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./ComponentsWithStyles/Login/Login.js"
import HomeScreen from "./ComponentsWithStyles/Home/Home.js";
import HomeDetailScreen from "./ComponentsWithStyles/Home/HomeDetail.js";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    HomeDetail: {
      screen: HomeDetailScreen,
      navigationOptions: {
        gesturesEnabled: false,
      }
    }
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './signup'


export default function App() {
  

  return (
    <SignUp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> chanhohan
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(AppNavigator);
