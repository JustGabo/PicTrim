"use client";
import React from "react";
import { SelectImage } from "./SelectImage";
import SelectImageBySrc from "./SelectImageBySrc";
import Image from "./Image";
import useImageStore from "@/stores/Image";

export const Canvas = () => {
  const { src } = useImageStore((state) => state);

  return (
    <section className="h-full w-full  flex flex-col items-center justify-center">
      {src.length > 0 ? (
        <article className="h-full w-full">
          <div className="flex-1 m-auto h-full ">
            <Image />
          </div>
        </article>
      ) : (
        <article className="w-[90%] flex flex-col h-full ">
          <div className="flex-1">
            <SelectImage />
          </div>
          <div className="flex-1">
            <SelectImageBySrc />
          </div>
        </article>
      )}
    </section>
  );
};
