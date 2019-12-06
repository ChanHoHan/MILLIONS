import React from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./HomeStyles";
import timerData from "../../RequestCRUD";

export default class HomeDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      time: 0,
      paused: true,
      firstTimeClicked: 0,
      timerList: [],
    };
    this.backButtonPress = this.backButtonPress.bind(this);
  }

  handleAction() {
    const { hour, minute, second, paused } = this.state;

    this.setState(() => ({
      paused: !paused,
      firstTimeClicked: 1,
      time: Number((hour * 3600) + (minute * 60) + second)
    }), () => this.timerStart());
  }

  handlePause() {
    const { paused } = this.state;
    clearInterval(this.interval);
    this.setState(() => ({
      paused: !paused,
    }));
  }

  handleSave() {
    this.props.navigation.navigate("Home");
  }

  timerStart() {
    this.interval = setInterval(() => {
      this.timerAction()
    }, 1000);
  }

  timerAction() {
    const { time } = this.state;

    this.setState(() => ({
      time: time + 1,
    }), () => this.timeSetter());
  }

  timeSetter() {
    const { time } = this.state;

    this.setState(() => ({
      hour: Math.floor(time / 3600),
    }), () => {
      this.setState((prevState) => ({
        minute: Math.floor((time - prevState.hour * 3600) / 60),
      }), () => {
        this.setState((prevState) => ({
          second: time - prevState.hour * 3600 - prevState.minute * 60,
        }));
      });
    });
  }

  async loadTimers() {
    const _timerList = await timerData.readTimer();
    this.setState({ timerList: _timerList.data });
  }

  componentDidMount() {
    this.loadTimers();
  }

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
    const { hour, minute, second } = this.state;
    const { navigation } = this.props;
    const pk = navigation.getParam("pk");
    return (
      <View style={styles.HomeDetailContainer}>
        <View style={styles.LogoContainer}>
          <Text style={styles.LogoTextStyle}>Millions</Text>
        </View>

        <View style={styles.HomeDetailContent}>
          <View style={styles.HomeDetailIconBox}>
            <View style={styles.HomeDetailFieldArrangement}>
              <AntDesign size={50} name={"clockcircleo"}></AntDesign>
              {this.state.timerList.map(timerSet => (
                <View key={timerSet.pk}>
                  {(function () {
                    if (timerSet.pk === pk) {
                      const pad = n => (n < 10 ? "0" + n : n);
                      return (
                        <Text style={styles.HomeDetailTimerText}>
                          {pad(timerSet.hour)}:{pad(timerSet.minute)}:
                          {pad(timerSet.second)}
                        </Text>
                      );
                    }
                  })()}
                </View>
              ))}
            </View>
            <View style={styles.HomeDetailIconBox}>
              <View style={styles.HomeDetailFieldArrangement}>
                <AntDesign size={30} name={"plus"}></AntDesign>
                <View>
                  {(function () {
                    const pad = n => (n < 10 ? "0" + n : n);
                    return (
                      <Text style={styles.HomeDetailFieldText}>
                        {pad(hour)}:{pad(minute)}:{pad(second)}
                      </Text>
                    );
                  })()}
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.HomeDetailContent}>
          <View style={styles.HomeDetailFieldArrangement}>
            {this.state.timerList.map(timerSet => (
              <View key={timerSet.pk}>
                {(function () {
                  if (timerSet.pk === pk) {
                    return (
                      <Text style={styles.HomeDetailFieldTitle}>
                        {timerSet.category}
                      </Text>
                    );
                  }
                })()}
              </View>
            ))}
            <Text style={{ fontSize: 20 }}>에</Text>
          </View>
          <View>
            <Text style={styles.HomeDetailFieldText}>
              그대의 노고를 누적 중
            </Text>
          </View>
        </View>

        <View style={styles.HomeDetailContent}>
          {this.state.firstTimeClicked === 0 ? (
            <View style={styles.HomeDetailButtonBox}>
              <View style={styles.HomeDetailTimerButton}>
                <TouchableOpacity onPress={() => { this.handleAction() }}>
                  <Text style={{ color: "white" }}>측정시작</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
              <View style={styles.HomeDetailButtonBox}>
                {this.state.paused === false ? (
                  <View style={styles.HomeDetailTimerButton2}>
                    <TouchableOpacity onPress={() => { this.handlePause() }}>
                      <Text style={{ color: "white" }}>일시정지</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                    <View style={styles.HomeDetailTimerButton}>
                      <TouchableOpacity onPress={() => { this.handleAction() }}>
                        <Text style={{ color: "white" }}>이어서 측정하기</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                <View style={styles.HomeDetailTimerButton}>
                  <TouchableOpacity onPress={() => { this.handleSave() }}>
                    <Text style={{ color: "white" }}>중지 및 저장</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
        </View>
      </View >
    );
  }
}
