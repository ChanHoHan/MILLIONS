import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./Login/Login"
import HomeScreen from "./Home/Home";
import HomeDetailScreen from "./Home/HomeDetail"

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
