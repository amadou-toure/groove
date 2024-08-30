import React from "react";
import { View, Pressable } from "react-native";
import { SettingContext } from "../store/Settings.jsx";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

const Modal_Element = ({ children, icon, onPress, iconColor }) => {
  const { Main_color } = useContext(SettingContext);
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: "10%",
        paddingBottom: "5%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: Main_color.Third_color,
        borderBottomWidth: 1,
        width: "90%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "40%",
        }}
      >
        <Ionicons
          name={icon}
          size={25}
          color={iconColor ? iconColor : Main_color.Button_color}
        />
        {children}
      </View>
    </Pressable>
  );
};

export default Modal_Element;
