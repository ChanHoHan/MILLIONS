
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class TimerDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Millions
                    </Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.mainTimerInfo}>
                        <View style={styles.mainTimerHead}>
                            <AntDesign size={50} name={"clockcircleo"}></AntDesign>
                            <Text style={styles.timerTextInfo}>10 : 20 : 03</Text>
                        </View>
                        <View style={styles.mainTimerInfo}>
                            <View style={styles.mainTimerHead}>
                                <AntDesign size={30} name={"plus"}></AntDesign>
                                <Text style={styles.plusTextInfo}>00 : 10 : 30</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.mainTimerHead}>
                        <Text style={styles.fieldTitle}>공부</Text>
                        <Text style={{ fontSize: 20 }}>라는</Text>
                    </View>
                    <View>
                        <Text style={styles.fieldDetail}>그대의 노고에 누적 중</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        height: 60,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },
    headerText: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30
    },
    content: {
        flex: 1
    },
    mainTimerInfo: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    mainTimerHead: {
        flexDirection: "row"
    },
    timerTextInfo: {
        marginLeft: 25,
        textAlign: "right",
        fontWeight: "600",
        fontSize: 30,
    },
    plusTextInfo: {
        marginLeft: 40,
        textAlign: "right",
        fontWeight: "600",
        fontSize: 30
    },
    fieldTitle: {
        textAlign: "left",
        marginLeft: 70,
        fontWeight: "800",
        fontSize: 20
    },
    fieldDetail: {
        textAlign: "right",
        marginRight: 70,
        fontSize: 20
    }
});