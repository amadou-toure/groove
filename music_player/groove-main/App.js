import Src from "./src/index";
import { SongProvider } from "./src/store";
import { SettingProvider } from "./src/store/Settings";
import StatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Main_color } from "./global_style";

export default function App() {
	return (
		<SettingProvider>
			<SongProvider>
				<StatusBar style="light" backgroundColor={Main_color.Third_color} />
				<Src />
			</SongProvider>
		</SettingProvider>
	);
}
