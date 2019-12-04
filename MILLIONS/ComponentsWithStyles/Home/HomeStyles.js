import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Logo and Navigator
  LogoContainer: {
    height: 60,
    alignItems: "center"
  },

  LogoTextStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30
  },

  Navigator: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  //Home
  HomeContainer: {
    flex: 1
  },

  HomeContent: {
    flex: 1
  },

  //HomeTimer
  HomeMainTimerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  HomeMainTimerTitleBox: {
    flexDirection: "row"
  },

  HomeMainTimerTitle: {
    textAlign: "center",
    fontSize: 25,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold"
  },

  HomeMainTimerCategory: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold"
  },

  HomeMainTimerTime: {
    textAlign: "center",
    fontSize: 60,
    fontWeight: "600"
  },

  //HomeElement
  HomeElementContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#eee",
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: "lightgray"
  },

  HomeElementUserInfo: {
    flexDirection: "row",
    alignItems: "center"
  },

  HomeElementCircleYellow: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "yellow"
  },

  HomeElementCircleRed: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "red"
  },

  HomeElementCategoryTitle: {
    paddingLeft: 10,
    fontWeight: "bold"
  },

  HomeElementUserLevelContainer: {
    backgroundColor: "gray",
    width: 60,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  HomeElementUserLevelTitle: {
    fontSize: 15
  },

  HomeElementDetailButtonContainer: {
    padding: 8,
    backgroundColor: "#5882FA",
    borderRadius: 5,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },

  HomeElementDetailText: {
    color: "white"
  },

  //HomeDetail
  HomeDetailContainer: {
    flex: 1
  },

  HomeDetailContent: {
    flex: 1
  },

  HomeDetailIconBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  HomeDetailTimerText: {
    marginLeft: 25,
    textAlign: "right",
    fontWeight: "600",
    fontSize: 30
  },

  HomeDetailPlusText: {
    marginLeft: 40,
    textAlign: "right",
    fontWeight: "600",
    fontSize: 30
  },

  HomeDetailFieldArrangement: {
    flexDirection: "row"
  },

  HomeDetailFieldTitle: {
    textAlign: "left",
    marginLeft: 70,
    fontWeight: "800",
    fontSize: 20
  },

  HomeDetailFieldText: {
    textAlign: "right",
    marginRight: 70,
    fontSize: 20
  },

  HomeDetailButtonBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  HomeDetailTimerButton: {
    backgroundColor: "grey",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginRight: 10
  },
  HomeDetailTimerButton2: {
    backgroundColor: "red",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginRight: 10
  }
});

export default styles;
