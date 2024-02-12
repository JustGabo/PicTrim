import { CanvasOptions } from "@/types";
import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

export const useCanvasOptionsStore = create(
  persist<CanvasOptions>(
    (set) => ({
      background: "",
      canvasRoundness: "sm",
      padding: 5,
      setBackground(background) {
        set({ background: background });
      },
      setCanvasRoundness(roundness) {
        set({ canvasRoundness: roundness });
      },
      setPadding(padding) {
        set({padding: padding})
      },
    }),
    {
      name: "canvasOptions-store",
      getStorage:()=>localStorage
    }
  )
);
