import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeAddSubjectScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Add your Subject</Text>
        <Button
          title="add"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
