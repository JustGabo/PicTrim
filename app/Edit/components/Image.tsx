"use client"
import useImageStore from "@/stores/Image";
import { useCanvasOptionsStore } from "@/stores/canvas";
import useImageOptionsStore from "@/stores/imageOptions";
import React from "react";
import Img from 'next/image'

const Image = () => {
  const { imageShadow,imageRoundness, imageShadowColor } = useImageOptionsStore((state) => state);
  const {padding,canvasRoundness} = useCanvasOptionsStore((state)=> state)
  const {src} = useImageStore((state)=>state)


  return (
    <section className="w-full h-full">
      <article className={`rounded-${canvasRoundness} p-${padding} overflow-hidden bg-white h-full w-full`}>
        <Img width={1000} height={1000} alt="Picture"
          className={`w-full h-full rounded-${imageRoundness} shadow-${imageShadow} object-cover shadow-${imageShadowColor}-500`}
          src={src}
        />
      </article>
    </section>
  );
};

export default Image;
