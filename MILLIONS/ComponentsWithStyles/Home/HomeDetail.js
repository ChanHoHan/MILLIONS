import React from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./HomeStyles";

function Timer({ sec, hour, min, style }) {
  const pad = n => (n < 10 ? "0" + n : n);
  return (
    <Text style={style}>
      {pad(hour)}:{pad(min)}:{pad(sec)}
    </Text>
  );
}

export default class HomeDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      firstTimeClicked: 0,
      paused: 1,
    };
    this.backButtonPress = this.backButtonPress.bind(this);
  }
  componentDidMount() {
    this.loadTimers();
  }

  async loadTimers() {
    const _timerList = await timerData.readTimer();
    this.setState({ timerList: _timerList.data });
  }

  // countButton() {
  //   if (this.state.firstTimeClicked === 0) {
  //     this.setState(prevState => ({
  //       firstTimeClicked: 1
  //     }));
  //   }

  //   if (this.state.firstTimeClicked !== 0 && this.state.paused === 0) {
  //     this.myInterval = setInterval(() => {
  //       this.setState(prevState => ({
  //         sec: prevState.sec + 1,
  //       }));
  //       //분 증가
  //       if (this.state.sec === 60) {
  //         this.setState(prevState => ({
  //           sec: 0,
  //           min: prevState.min + 1
  //         }));
  //       }
  //       //시간 증가
  //       if (this.state.min === 60) {
  //         this.setState(prevState => ({
  //           min: 0,
  //           hour: prevState.hour + 1
  //         }));
  //       }
  //     }, 1000)
  //   }
  // }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backButtonPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backButtonPress);
  }

  backButtonPress = () => {
    return true;
  };

  render() {
    const { hour, min, sec } = this.state;
    return (
      <View style={styles.HomeDetailContainer}>
        <View style={styles.LogoContainer}>
          <Text style={styles.LogoTextStyle}>Millions</Text>
        </View>

        <View style={styles.HomeDetailContent}>
          <View style={styles.HomeDetailIconBox}>
            <View style={styles.HomeDetailFieldArrangement}>
              <AntDesign size={50} name={"clockcircleo"}></AntDesign>
              <Text style={styles.HomeDetailTimerText}>10 : 20 : 30</Text>
            </View>
            <View style={styles.HomeDetailIconBox}>
              <View style={styles.HomeDetailFieldArrangement}>
                <AntDesign size={30} name={"plus"}></AntDesign>
                <Timer
                  style={styles.HomeDetailFieldText}
                  sec={sec}
                  hour={hour}
                  min={min}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.HomeDetailContent}>
          <View style={styles.HomeDetailFieldArrangement}>
            <Text style={styles.HomeDetailFieldTitle}>공부</Text>
            <Text style={{ fontSize: 20 }}>라는</Text>
          </View>
          <View>
            <Text style={styles.HomeDetailFieldText}>
              그대의 노고에 누적 중
            </Text>
          </View>
        </View>

        <View style={styles.HomeDetailContent}>
          {this.state.firstTimeClicked === 0
            ? <View style={styles.HomeDetailButtonBox}>
              <View style={styles.HomeDetailTimerButton}>
                <TouchableOpacity
                  onPress={() => {
                    // this.setState(prevState => ({
                    //   paused: 0
                    // }));
                    // this.countButton();
                  }}>
                  <Text style={{ color: "white" }}>
                    측정시작
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            : <View style={styles.HomeDetailButtonBox}>
              {this.state.paused === 0
                ? <View style={styles.HomeDetailTimerButton2}>
                  <TouchableOpacity
                    onPress={() => {
                      // this.setState(prevState => ({
                      //   paused: 1
                      // }));
                    }}>
                    <Text style={{ color: "white" }}>
                      일시정지
                      </Text>
                  </TouchableOpacity>
                </View>
                : <View style={styles.HomeDetailTimerButton}>
                  <TouchableOpacity
                    onPress={() => {
                      // this.setState(prevState => ({
                      //   paused: 0
                      // }));
                    }}>
                    <Text style={{ color: "white" }}>
                      이어서 측정하기
                      </Text>
                  </TouchableOpacity>
                </View>
              }
              <View style={styles.HomeDetailTimerButton}>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate("Home") }}>
                  <Text style={{ color: "white" }}>
                    중지 및 저장
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
}