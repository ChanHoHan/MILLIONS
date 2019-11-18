import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class MainTimer extends React.Component {
  render() {
    const { category, time } = this.props;
    return (
      <View style={styles.elem} key={timerSet.id}>
        <View style={styles.userInfo} key={timerSet.id + 10}>
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
    );
  }
}
const styles = StyleSheet.create({
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
