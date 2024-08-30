import React from "react";
import { View, Text, Modal } from "react-native";
import { SettingContext } from "../store/Settings";
import { useContext } from "react";

const Custom_Modal = ({ children, Visible }) => {
  const { Main_color } = useContext(SettingContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={Visible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: 0,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 25,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            backgroundColor: Main_color.Third_color,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default Custom_Modal;
