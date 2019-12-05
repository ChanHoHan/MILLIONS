import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import timerData from "../../RequestCRUD";
import HomeMainTimer from "./HomeMainTimer";
import HomeSubTimer from "./HomeSubTimer";
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
          {//메인 타이머
          this.state.timerList.map(timerSet => (
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

          {//서브 타이머
          this.state.timerList.map(timerSet => (
            <HomeSubTimer
              key={timerSet.pk}
              pk={timerSet.pk}
              is_main_category={timerSet.is_main_category}
              category={timerSet.category}
              navigation={this.props.navigation}
            ></HomeSubTimer>
          ))}
        </View>

        {/*기능 버튼*/}
        <View style={styles.HomeElementActionButtonContiner}>
          {/*과목 추가 버튼*/}
          <TouchableOpacity
            style={styles.HomeElementActionButton}
            onPress={() => this.props.navigation.navigate("HomeAddSubject")}
          >
            <Text style={styles.HomeElementDetailText}>과목 추가</Text>
          </TouchableOpacity>

          {/*등급표 버튼*/}
          <TouchableOpacity
            style={styles.HomeElementActionButton}
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
