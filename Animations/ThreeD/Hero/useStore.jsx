import { create } from 'zustand'

const textures = ["1.jpeg", "2.jpeg", "3.jpeg"];

export const useStore = create((set) => ({
  index: 0, // Set default index to 1 for "2.jpeg"
  texture: textures[0], // Default texture is "2.jpeg"
  setIndex: (num) => set({ index: num, texture: textures[num] }),
}));
