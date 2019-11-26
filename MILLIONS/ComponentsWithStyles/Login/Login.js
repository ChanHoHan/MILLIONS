import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./LoginStyles";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.temp}>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="SignUp"
          onPress={()=>this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}
