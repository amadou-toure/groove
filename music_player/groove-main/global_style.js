import { StyleSheet } from "react-native";
import { Platform } from "expo-modules-core";

const Main_color = {
  Primary_color: "#EBE6E4",
  Secondary_color: "#FF7878", //active bottom navigation tab color
  Third_color: "#121212", //grey bottom nav color
  Button_color: "#fff",
  bg_color: "#060606",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title_text: {
    color: Main_color.Primary_color,
    fontSize: 30,
    fontWeight: "800",
    textAlign: "left",
  },
  Primary_text: {
    color: Main_color.Primary_color,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
  },
  Secondary_text: {
    color: Main_color.Secondary_color,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "left",
  },
  Player: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
  },
  bottom_player: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
    borderTopLeftRadius: Platform.OS === "ios" ? 60 : 20,
    borderTopRightRadius: Platform.OS === "ios" ? 60 : 20,
    width: "96%",
    height: 130,
    //padding: 10,
  },
  Player_control: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 0.2,
  },
  Track_info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flex: 0.65,
  },
});

export { styles, Main_color };
