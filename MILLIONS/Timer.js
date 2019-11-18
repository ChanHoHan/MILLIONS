import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import timerData from "./gettimer";
import MainTimer from "./MainTimer";

export default class TimerScreen extends React.Component {
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
    this.getTimers();
  }

  async getTimers() {
    const _timerList = await timerData.getAllTimers();
    this.setState({ timerList: _timerList.data });
  }

  render() {
    console.log(this.state.timerList);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Millons</Text>
        </View>
        <View style={styles.content}>
          {this.state.timerList.map(timerSet => (
            <View key={timerSet.pk}>
              {(function() {
                if (timerSet.is_main_category === true)
                  return (
                    <MainTimer
                      category={timerSet.category}
                      time={timerSet.time}
                    />
                  );
              })()}
            </View>
          ))}
          {this.state.timerList.map(timerSet => (
            <View style={styles.elem} key={timerSet.pk}>
              <View style={styles.userInfo}>
                <View
                  style={
                    timerSet.is_main_category === false
                      ? styles.circleYellow
                      : styles.circleRed
                  }
                />
                <Text style={styles.subject}>{timerSet.category}</Text>
              </View>
              <View style={styles.grade}>
                <Text>마스터</Text>
              </View>
              <View style={styles.userTimerButton}>
                <Button
                  color="white"
                  title="측정하기"
                  onPress={() => this.props.navigation.navigate("TimerDetail")}
                ></Button>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <FontAwesome
            title="Home"
            size={80}
            name="home"
            onPress={() => this.props.navigation.navigate("Home")}
          ></FontAwesome>
          <FontAwesome size={80} name="user"></FontAwesome>
          <FontAwesome size={80} name="trophy"></FontAwesome>
          <FontAwesome size={80} name="group"></FontAwesome>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    height: 60,
    alignItems: "center"
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30
  },

  content: {
    flex: 1
  },
  mainTimerInfo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  mainTimerHead: {
    flexDirection: "row"
  },
  mainTimerMent: {
    textAlign: "center",
    fontSize: 25,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold"
  },
  mainTimerSubject: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold"
  },
  mainTimerTime: {
    textAlign: "center",
    fontSize: 60,
    fontWeight: "600"
  },
  elem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#eee",
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: "lightgray"
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  userTimerButton: {
    padding: 8,
    backgroundColor: "#5882FA",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },
  circleYellow: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "yellow"
  },
  circleRed: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "red"
  },
  subject: {
    paddingLeft: 10,
    fontWeight: "bold"
  },
  grade: {
    backgroundColor: "gray",
    width: 60,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  white: {
    color: "white"
  },
  footer: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
