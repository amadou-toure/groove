import { createContext, useState } from "react";
export const SettingContext = createContext();

// Créez un composant Provider
export const SettingProvider = ({ children }) => {
  const [TextSize, setTextSize] = useState();
  const [Theme, setTheme] = useState("blue");
  const [Language, setLanguage] = useState("fr");
  const [IconSize, setIconSize] = useState();

  const BlueColorPalette = {
    Primary_color: "#EBE6E4",
    Secondary_color: "#FF7878",
    Third_color: "#0f1727", //"#343434",
    Button_color: "#decad0",
    bg_color: "#020b1b",
  };
  const BlackColorPalette = {
    Primary_color: "#EBE6E4",
    Secondary_color: "#FF7878", //active bottom navigation tab color
    Third_color: "#121212", //grey bottom nav color
    Button_color: "#fff",
    bg_color: "#060606",
  };

  return (
    <SettingContext.Provider
      value={{
        Main_color: Theme === "blue" ? BlueColorPalette : BlackColorPalette,
        TextSize,
        Theme,
        setTheme,
        setLanguage,
        setIconSize,
        setTextSize,
        Language,
        IconSize,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
