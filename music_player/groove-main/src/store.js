import { create } from "zustand";

const useStore = create((set) => ({
	song: null,
	cleanSong: () => set({ song: null }),
	updateSong: (newSong) => set({ song: newSong }),
}));
