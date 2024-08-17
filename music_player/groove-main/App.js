import Src from "./src/index";
import { SongProvider } from "./src/store";

export default function App() {
  return (
    <SongProvider>
      <Src />
    </SongProvider>
  );
}
