import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HomeStyles";

export default class HomeSubTimer extends React.Component {
  render() {
    const { pk, is_main_category, category, navigation } = this.props;
    return (
      <View style={styles.HomeElementContainer}>
        <View style={styles.HomeElementUserInfo}>
          <View
            style={
              is_main_category === false
                ? styles.HomeElementCircleYellow
                : styles.HomeElementCircleRed
            }
          />

          <Text style={styles.HomeElementCategoryTitle}>{category}</Text>
        </View>
        <View style={styles.HomeElementUserLevelContainer}>
          <Text style={styles.HomeElementUserLevelTitle}>마스터</Text>
        </View>

        <TouchableOpacity
          style={styles.HomeElementDetailButtonContainer}
          onPress={() =>
            navigation.navigate("HomeDetail", {
              pk: pk
            })
          }
        >
          <Text style={styles.HomeElementDetailText}>측정하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
