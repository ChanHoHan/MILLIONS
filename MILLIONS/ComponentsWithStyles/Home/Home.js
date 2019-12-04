import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import timerData from "../../RequestCRUD";
import HomeMainTimer from "./HomeMainTimer";
import styles from "./HomeStyles";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      time: "",
      is_main_category: "",
      timerList: []
    };
  }

  componentDidMount() {
    this.loadTimers();
  }

  async loadTimers() {
    const _timerList = await timerData.readTimer();
    this.setState({ timerList: _timerList.data });
  }

  render() {
    return (
      <View style={styles.HomeContainer}>
        <View style={styles.LogoContainer}>
          <Text style={styles.LogoTextStyle}>Millons</Text>
        </View>

        <View style={styles.HomeContent}>
          {this.state.timerList.map(timerSet => (
            <View key={timerSet.pk}>
              {(function() {
                if (timerSet.is_main_category === true)
                  return (
                    <HomeMainTimer
                      category={timerSet.category}
                      time={timerSet.time}
                    />
                  );
              })()}
            </View>
          ))}
          {this.state.timerList.map(timerSet => (
            <View style={styles.HomeElementContainer} key={timerSet.pk}>
              <View style={styles.HomeElementUserInfo}>
                <View
                  style={
                    timerSet.is_main_category === false
                      ? styles.HomeElementCircleYellow
                      : styles.HomeElementCircleRed
                  }
                />
                <Text style={styles.HomeElementCategoryTitle}>
                  {timerSet.category}
                </Text>
              </View>
              <View style={styles.HomeElementUserLevelContainer}>
                <Text style={styles.HomeElementUserLevelTitle}>마스터</Text>
              </View>

              <TouchableOpacity
                style={styles.HomeElementDetailButtonContainer}
                onPress={() => this.props.navigation.navigate("HomeDetail")}
              >
                <Text style={styles.HomeElementDetailText}>측정하기</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.Navigator}>
          <FontAwesome
            title="Home"
            size={80}
            name="home"
            onPress={() => this.props.navigation.navigate("Home")}
          ></FontAwesome>
          <FontAwesome title="Feed" size={80} name="user"></FontAwesome>
          <FontAwesome title="Ranks" size={80} name="trophy"></FontAwesome>
          <FontAwesome title="Community" size={80} name="group"></FontAwesome>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },

//   header: {
//     height: 60,
//     alignItems: "center"
//   },
//   headerText: {
//     fontWeight: "bold",
//     color: "white",
//     fontSize: 30
//   },

//   content: {
//     flex: 1
//   },
//   mainTimerInfo: {
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   mainTimerHead: {
//     flexDirection: "row"
//   },
//   mainTimerMent: {
//     textAlign: "center",
//     fontSize: 25,
//     marginLeft: 10,
//     marginTop: 10,
//     fontWeight: "bold"
//   },
//   mainTimerSubject: {
//     textAlign: "center",
//     fontSize: 50,
//     fontWeight: "bold"
//   },
//   mainTimerTime: {
//     textAlign: "center",
//     fontSize: 60,
//     fontWeight: "600"
//   },
//   elem: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     borderColor: "#eee",
//     borderBottomWidth: 0.5,
//     padding: 5,
//     backgroundColor: "lightgray"
//   },
//   userInfo: {
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   userTimerButton: {
//     padding: 8,
//     backgroundColor: "#5882FA",
//     borderRadius: 5,
//     width: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     height: 50
//   },
//   circleYellow: {
//     width: 30,
//     height: 30,
//     borderRadius: 25,
//     backgroundColor: "yellow"
//   },
//   circleRed: {
//     width: 30,
//     height: 30,
//     borderRadius: 25,
//     backgroundColor: "red"
//   },
//   subject: {
//     paddingLeft: 10,
//     fontWeight: "bold"
//   },
//   grade: {
//     backgroundColor: "gray",
//     width: 60,
//     height: 40,
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   white: {
//     color: "white"
//   },
//   footer: {
//     height: 80,
//     flexDirection: "row",
//     justifyContent: "space-between"
//   }
// });
