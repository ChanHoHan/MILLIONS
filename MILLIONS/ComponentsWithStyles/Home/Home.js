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
                onPress={() =>
                  this.props.navigation.navigate("HomeDetail", {
                    pk: timerSet.pk
                  })
                }
              >
                <Text style={styles.HomeElementDetailText}>측정하기</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.HomeElementActionButtonContiner}>
          <TouchableOpacity
            style={styles.HomeElementDetailButtonContainer}
            onPress={() => this.props.navigation.navigate("HomeAddSubject")}
          >
            <Text style={styles.HomeElementDetailText}>과목 추가</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.HomeElementDetailButtonContainer}
            onPress={() => this.props.navigation.navigate("HomeGradeInfo")}
          >
            <Text style={styles.HomeElementDetailText}>등급표</Text>
          </TouchableOpacity>
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
