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
      flag: 1
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
  countButton() {
    if (this.state.flag === 0) {
      this.state.flag = 1;
      clearInterval(this.myInterval);
      console.log(this.state.flag + "인터벌 지움");
    } else {
      this.state.flag = 0;
      this.setState(prevState => ({
        flag: prevState.flag
      }));
      this.myInterval = setInterval(() => {
        this.setState(prevState => ({
          sec: prevState.sec + 1,
          flag: prevState.flag
        }));
        //분 증가
        if (this.state.sec === 60) {
          this.setState(prevState => ({
            sec: 0,
            min: prevState.min + 1
          }));
        }
        //시간 증가
        if (this.state.min === 60) {
          this.setState(prevState => ({
            min: 0,
            hour: prevState.hour + 1
          }));
        }
      }, 1000);
    }
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
          <View style={styles.HomeDetailButtonBox}>
            <View
              style={
                this.state.flag === 1
                  ? styles.HomeDetailTimerButton
                  : styles.HomeDetailTimerButton2
              }
            >
              <TouchableOpacity
                onPress={() => {
                  this.countButton();
                  this.setState(prevState => ({
                    flag: prevState.flag
                  }));
                }}
              >
                <Text style={{ color: "white" }}>
                  {this.state.flag === 1 ? "측정시작" : "측정중지"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },

//     header: {
//         height: 60,
//         alignItems: "center",
//         marginTop: 30,
//         marginBottom: 30
//     },
//     headerText: {
//         fontWeight: "bold",
//         color: "black",
//         fontSize: 30
//     },
//     content: {
//         flex: 1
//     },
//     mainTimerInfo: {
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     mainTimerHead: {
//         flexDirection: "row"
//     },
//     timerTextInfo: {
//         marginLeft: 25,
//         textAlign: "right",
//         fontWeight: "600",
//         fontSize: 30,
//     },
//     plusTextInfo: {
//         marginLeft: 40,
//         textAlign: "right",
//         fontWeight: "600",
//         fontSize: 30
//     },
//     fieldTitle: {
//         textAlign: "left",
//         marginLeft: 70,
//         fontWeight: "800",
//         fontSize: 20
//     },
//     fieldDetail: {
//         textAlign: "right",
//         marginRight: 70,
//         fontSize: 20
//     },
//     stopTimerButton: {
//         backgroundColor: "grey",
//         borderRadius: 5,
//         width: 100,
//         alignItems: "center",
//         justifyContent: "center",
//         height: 50
//     }
// });
