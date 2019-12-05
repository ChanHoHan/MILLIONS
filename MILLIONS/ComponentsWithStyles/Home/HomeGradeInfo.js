import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeGradeInfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Grade Info</Text>
        <Text>비기너 : 0시간 이상 ~ 10시간 이하</Text>
        <Text>주니어 : 10시간 초과 ~ 100시간 이하</Text>
        <Text>시니어 : 100시간 초과 ~ 1000시간 이하</Text>
        <Text>베테랑 : 1000시간 초과 ~ 5000시간 이하</Text>
        <Text>에이스 : 5000시간 초과 ~ 1만시간 이하</Text>
        <Text>마스터 : 10000시간초과 ~ </Text>
      </View>
    );
  }
}
