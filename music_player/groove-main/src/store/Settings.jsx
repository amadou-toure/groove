import { createContext, useState } from "react";
export const SettingContext = createContext();

// Créez un composant Provider
export const SettingProvider = ({ children }) => {
	const [TextSize, setTextSize] = useState();
	const [Theme, setTheme] = useState("light");
	const [Language, setLanguage] = useState("fr");
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [IconSize, setIconSize] = useState();
	return (
		<SettingContext.Provider
			value={{
				TextSize,
				Theme,
				Language,
				isDarkMode,
				IconSize,
			}}
		>
			{children}
		</SettingContext.Provider>
	);
};
