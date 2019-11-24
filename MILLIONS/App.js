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
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(AppNavigator);
