import { create } from "zustand";

import { persist } from "zustand/middleware";

import { ImageOptions } from "@/types/index";

const useImageOptionsStore = create(
  persist<ImageOptions>(
    (set) => ({
      browserFrame: "",
      imageRoundness: "sm",
      imageShadow: "sm",
      size: "sm",
      imageShadowColor: 'white',
      setImageRoundness: (roundness) => {
        set({ imageRoundness: roundness });
      },
      setImageShadow(shadow) {
        set({ imageShadow: shadow });
      },
      setSize(size) {
        set({ size: size });
      },
      setShadowColor(color) {
        set({imageShadowColor: color})
      },
    }),
    {
      name: "imageOptions-store",
      getStorage: ()=> localStorage,
    }
  )
);

export default useImageOptionsStore;
