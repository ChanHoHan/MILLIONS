import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Home";
import TimerScreen from "./Timer";
import TimerDetailScreen from "./TimerDetail";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Timer: TimerScreen,
    TimerDetail: {
      screen: TimerDetailScreen,
      navigationOptions: {
        gesturesEnabled: false,
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
