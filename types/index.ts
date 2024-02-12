export interface CanvasOptions {
  padding?: number;
  background?: string;
  canvasRoundness?: string;
  setBackground: (background: string) => void;
  setCanvasRoundness: (roundness: string) => void;
  setPadding: (padding: number) => void;
}

export interface ImageOptions {
  size?: string;
  browserFrame?: string;
  imageShadow?: string;
  imageShadowColor?: string;
  imageRoundness?: string;
  setSize: (newSize: string) => void;
  setImageShadow: (newShadow: string) => void;
  setImageRoundness: (newRoundness: string) => void;
  setShadowColor: (color: string)=> void
}

export interface Image {
  src: string;
  setSrc: (src: string) => void;
}
