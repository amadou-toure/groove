import { View, Text, ScrollView, Pressable, Modal } from "react-native";
import React from "react";
import { SettingContext } from "../store/Settings.jsx";
import { useContext, useState } from "react";
import { styles } from "../../global_style.js";
import { Ionicons } from "@expo/vector-icons";

const Option = ({ children, Visible }) => {
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

const OptionElements = ({ children, icon, onPress }) => {
  const { setTheme, setLanguage, setIconSize, setTextSize, Main_color } =
    useContext(SettingContext);
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: "10%",
        paddingBottom: "5%",
        flexDirection: "row",
        justifyContent: "flex-start",
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
          color={Main_color.Button_color}
        />
        {children}
      </View>
    </Pressable>
  );
};

export default function Setting() {
  const [modalVisible, setModalVisible] = useState(false);
  const handle_choosed_option = (Action) => {
    Action();
    setModalVisible(false);
  };
  const { setTheme, setLanguage, setIconSize, setTextSize, Main_color } =
    useContext(SettingContext);
  return (
    <ScrollView
      style={{ backgroundColor: Main_color.bg_color }}
      contentContainerStyle={styles.container}
    >
      <OptionElements icon="person">
        <Text style={styles.Primary_text}>Profile</Text>
      </OptionElements>
      <OptionElements
        onPress={() => setModalVisible(true)}
        icon="brush-sharp"
        children={
          <>
            <Option Visible={modalVisible}>
              <OptionElements
                onPress={() => handle_choosed_option(() => setTheme("black"))}
              >
                <Text style={styles.Primary_text}>Black</Text>
              </OptionElements>
              <OptionElements
                onPress={() => handle_choosed_option(() => setTheme("blue"))}
              >
                <Text style={styles.Primary_text}>Blue</Text>
              </OptionElements>
            </Option>
            <Text style={styles.Primary_text}>Theme</Text>
          </>
        }
      />

      <OptionElements
        icon="search-sharp"
        children={<Text style={styles.Primary_text}>Police Size</Text>}
      />
      <OptionElements
        icon="language-sharp"
        children={<Text style={styles.Primary_text}>Language</Text>}
      />
      <OptionElements icon="notifications">
        <Text style={styles.Primary_text}>Notification</Text>
      </OptionElements>
      <OptionElements icon="musical-note-sharp">
        <Text style={styles.Primary_text}>Equalizer</Text>
      </OptionElements>
    </ScrollView>
  );
}
