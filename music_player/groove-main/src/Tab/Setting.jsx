import { View, Text, ScrollView, Pressable, Modal } from "react-native";
import React from "react";
import { SettingContext } from "../store/Settings.jsx";
import { useContext, useState } from "react";
import { styles } from "../../global_style.js";
import { Ionicons } from "@expo/vector-icons";
import Custom_Modal from "../components/Custom_Modal.jsx";
//find another name for this component
import Modal_Element from "../components/Modal_Element.jsx";

export default function Setting() {
  const [ThemeModalVisible, setThemeModalVisible] = useState(false);
  const [FontModalVisible, setFontModalVisible] = useState(false);
  const [LanguageModalVisible, setLanguageModalVisible] = useState(false);
  const handle_choosed_option = (Action) => {
    Action();
    setThemeModalVisible(false);
    setFontModalVisible(false);
    setLanguageModalVisible(false);
  };
  const { setTheme, Theme, setLanguage, setIconSize, setTextSize, Main_color } =
    useContext(SettingContext);
  return (
    <ScrollView
      style={{ backgroundColor: Main_color.bg_color }}
      contentContainerStyle={styles.container}
    >
      <Modal_Element icon="person">
        <Text style={styles.Primary_text}>Profile</Text>
      </Modal_Element>
      <Modal_Element
        onPress={() => setThemeModalVisible(true)}
        icon="brush-sharp"
      >
        {/* Option is the container */}
        <Custom_Modal Visible={ThemeModalVisible}>
          {Theme === "black" ? (
            <>
              <Modal_Element
                onPress={() => handle_choosed_option(() => setTheme("black"))}
                icon="checkmark-done-sharp"
              >
                <Text style={styles.Primary_text}>Black</Text>
              </Modal_Element>
              <Modal_Element
                icon="square"
                iconColor="#020b1b"
                onPress={() => handle_choosed_option(() => setTheme("blue"))}
              >
                <Text style={styles.Primary_text}>Blue</Text>
              </Modal_Element>
            </>
          ) : (
            <>
              <Modal_Element
                onPress={() => handle_choosed_option(() => setTheme("black"))}
                icon="square"
                iconColor="#060606"
              >
                <Text style={styles.Primary_text}>Black</Text>
              </Modal_Element>
              <Modal_Element
                icon="checkmark-done-sharp"
                onPress={() => handle_choosed_option(() => setTheme("blue"))}
              >
                <Text style={styles.Primary_text}>Blue</Text>
              </Modal_Element>
            </>
          )}
        </Custom_Modal>
        <Text style={styles.Primary_text}>Theme</Text>
      </Modal_Element>

      <Modal_Element
        icon="search-sharp"
        onPress={() => setFontModalVisible(true)}
      >
        <Custom_Modal Visible={FontModalVisible}>
          <Modal_Element
            onPress={() => handle_choosed_option(() => setTextSize())}
          >
            <Text style={styles.Primary_text}>Small</Text>
          </Modal_Element>
          <Modal_Element
            onPress={() => handle_choosed_option(() => setTextSize())}
          >
            <Text style={styles.Primary_text}>Medium</Text>
          </Modal_Element>
          <Modal_Element
            onPress={() => handle_choosed_option(() => setTextSize())}
          >
            <Text style={styles.Primary_text}>Large</Text>
          </Modal_Element>
        </Custom_Modal>
        <Text style={styles.Primary_text}>Police Size</Text>
      </Modal_Element>

      <Modal_Element icon="language-sharp">
        <Text style={styles.Primary_text}>Language</Text>
      </Modal_Element>

      <Modal_Element icon="notifications">
        <Text style={styles.Primary_text}>Notification</Text>
      </Modal_Element>
      <Modal_Element icon="musical-note-sharp">
        <Text style={styles.Primary_text}>Equalizer</Text>
      </Modal_Element>
    </ScrollView>
  );
}
