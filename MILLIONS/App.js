import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Home";
import TimerScreen from "./Timer";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Timer: TimerScreen
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
