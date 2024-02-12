import { Image } from "@/types";
import { create } from "zustand";

import { persist } from "zustand/middleware";

const useImageStore = create(
  persist<Image>(
    (set) => ({
      src: "",
      setSrc(src) {
        set({ src: src });
      },
    }),
    {
      name: "image-store",
      getStorage: () => localStorage,
    }
  )
);

export default useImageStore
