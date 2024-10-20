import { SafeAreaView } from "react-native-safe-area-context";
import Src from "./src/index";
import { SongProvider } from "./src/store";
import { SettingProvider } from "./src/store/Settings";


export default function App() {
  return (
    <SettingProvider>
      <SongProvider>
        <Src />
      </SongProvider>
    </SettingProvider>
    
  );
}
