import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./HomeStyles";

export default class HomeMainTimer extends React.Component {
  render() {
    const { category, time } = this.props;
    return (
      <View>
        <View style={styles.HomeMainTimerContainer}>
          <View style={styles.HomeMainTimerTitleBox}>
            <AntDesign size={60} name="clockcircleo"></AntDesign>
            <Text style={styles.HomeMainTimerTitle}>그대의 노고</Text>
          </View>
          <Text style={styles.HomeMainTimerCategory}>{category}</Text>
          <Text style={styles.HomeMainTimerTime}>{time}</Text>
        </View>
      </View>
    );
  }
}