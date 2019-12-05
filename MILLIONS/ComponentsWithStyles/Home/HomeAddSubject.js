import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styles from "./HomeStyles";
import timerRequest from "../../RequestCRUD";
import qs from "qs";

export default class HomeAddSubjectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  createTimers() {
    const data = { category: this.state.text, is_main_category: false };
    timerRequest.createTimer(qs.stringify(data));
    this.setState({ text: "" });
  }

  render() {
    console.log();
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.HomeAddSubjectContainer}>
          <Text>과목을 추가하세요.</Text>
          <TextInput
            placeholder="과목을 입력하세요"
            onChangeText={text => this.setState({ text })}
            style={styles.HomeAddSubjectInput}
            maxLength={40}
          ></TextInput>
          <View style={styles.HomeAddSubjectButtonContainer}>
            <TouchableOpacity
              style={styles.HomeAddSubjectButton}
              onPress={() => {
                this.createTimers();
                this.props.navigation.navigate("Home");
              }}
            >
              <Text style={styles.HomeAddSubjectButtonText}>비기너로 시작</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
