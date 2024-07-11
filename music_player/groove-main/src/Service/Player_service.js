import { Audio } from "expo-av";
import { createGlobalState } from "react-hooks-global-states";

const useSong = createGlobalState({});

const unload_sound = async (Song) => {
	if (Song != null) {
		console.log("Unloading Sound");
		await Song.unloadAsync();
		console.log("Unloading completed");
	} else return;
};

const load_sound = async (track, Song, setSong) => {
	try {
		setSong(
			await Audio.Sound.createAsync({
				uri: track.url,
			})
		);
		console.log(Song);
	} catch (error) {
		console.error("Failed to load sound:", error);
	}
};

const Play = async (Song) => {
	//console.log(Song);
	if (Song != null) {
		await Song.playAsync();
		console.log(Song);
	} else {
		console.log("no music loaded");
	}
};

const Pause = async (Song) => {
	await Song.pauseAsync();
};
const currentTrackIndex = () => {};
const Next = (Queu = [], index) => {
	Play(Queu[index + 1]);
};
const Previous = (Queu = [], index) => {
	Play(Queu[index - 1]);
};
export { useSong, Play, Pause, Next, unload_sound, load_sound };
//"playableDurationMillis": 26174, "positionMillis": 0
