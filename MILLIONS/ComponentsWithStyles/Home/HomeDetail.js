import React from "react";
import { View, Text, Button, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./HomeStyles";

export default class HomeDetailScreen extends React.Component {

    constructor(props) {
        super(props)

        this.backButtonPress = this.backButtonPress.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backButtonPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backButtonPress);
    }

    backButtonPress = () => {
        return true;
    }

    render() {
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
                                <Text style={styles.HomeDetailPlusText}>00 : 10 : 20</Text>
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
                        <Text style={styles.HomeDetailFieldText}>그대의 노고에 누적 중</Text>
                    </View>
                </View>

                <View style={styles.HomeDetailContent}>
                    <View style={styles.HomeDetailButtonBox}>
                        <View style={styles.HomeDetailTimerStartButton}>
                            <Button color="white" title="측정시작" onPress={() => this.props.navigation.navigate("Home")}></Button>
                        </View>
                        <View style={styles.HomeDetailTimerStopButton}>
                            <Button color="white" title="측정시작" onPress={() => this.props.navigation.navigate("Home")}></Button>
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