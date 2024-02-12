"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  AlignVerticalSpaceAround,
  Blend,
  Image,
  MonitorStop,
  Radius,
  Scaling,
} from "lucide-react";

import useImageOptionsStore from "@/stores/imageOptions";
import { useState } from "react";
import { useCanvasOptionsStore } from "@/stores/canvas";
import ImagePosition from "./ImagePosition";

export const MenuSideBar = () => {
  const {
    setImageRoundness,
    setImageShadow,
    setSize,
    browserFrame,
    imageShadow,
    imageRoundness,
    size,
    imageShadowColor,
    setShadowColor,
  } = useImageOptionsStore((state) => state);

  const {
    setBackground,
    setCanvasRoundness,
    setPadding,
    background,
    canvasRoundness,
    padding,
  } = useCanvasOptionsStore((state) => state);

  return (
    <Menubar className="flex flex-col gap-2 border-none overflow-y-auto h-full items-start p-5 bg-[#113e41]">
      <h2 className="text-center text-xs w-full font-medium   my-2 text-gray-400 select-none">
        Screenshot options
      </h2>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem  ">
          <div className="flex items-center gap-2">
            <Scaling className="w-5 h-5 " strokeWidth={1.5} />
            Size
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            className={`${size == "sm" ? "text-black" : "text-gray-500"}`}
          >
            Small
          </MenubarItem>
          <MenubarItem
            className={`${size == "md" ? "text-black" : "text-gray-500"}`}
          >
            New Window
          </MenubarItem>
          <MenubarItem
            className={`${size == "lg" ? "text-black" : "text-gray-500"}`}
          >
            New Incognito Window
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <MonitorStop className="w-5 h-5 " strokeWidth={1.5} />
            Browser Frame
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <Blend className="w-5 h-5 " strokeWidth={1.5} />
            Shadow
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Size</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarCheckboxItem
                checked={imageShadow == "sm"}
                onClick={() => setImageShadow("sm")}
                className={`${
                  imageShadow == "sm" ? "text-black" : "text-gray-500"
                } cursor-pointer`}
              >
                Small
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadow == "md"}
                onClick={() => setImageShadow("md")}
                className={`${
                  imageShadow == "md" ? "text-black" : "text-gray-500"
                } cursor-pointer`}
              >
                Medium
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadow == "lg"}
                onClick={() => setImageShadow("lg")}
                className={`${
                  imageShadow == "lg" ? "text-black" : "text-gray-500"
                } cursor-pointer`}
              >
                Large
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadow == "xl"}
                onClick={() => setImageShadow("xl")}
                className={`${
                  imageShadow == "xl" ? "text-black" : "text-gray-500"
                } cursor-pointer`}
              >
                Larger
              </MenubarCheckboxItem>

              <MenubarCheckboxItem
                checked={imageShadow == "2xl"}
                onClick={() => setImageShadow("2xl")}
                className={`${
                  imageShadow == "2xl" ? "text-black" : "text-gray-500"
                } cursor-pointer`}
              >
                Larger x2
              </MenubarCheckboxItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Color</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarCheckboxItem
                checked={imageShadowColor == "white"}
                onClick={() => setShadowColor("white")}
                className={`${
                  imageShadowColor == "white" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>White</p>
                <span className="w-5 h-5 bg-white rounded-full border-[.3px] border-black"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "black"}
                onClick={() => setShadowColor("black")}
                className={`${
                  imageShadowColor == "black" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Black</p>
                <span className="w-5 h-5 bg-black rounded-full"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "red"}
                onClick={() => setShadowColor("red")}
                className={`${
                  imageShadowColor == "red" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Red</p>
                <span className="w-5 h-5 bg-red-500 rounded-full"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "blue"}
                onClick={() => setShadowColor("blue")}
                className={`${
                  imageShadowColor == "blue" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Blue</p>
                <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "green"}
                onClick={() => setShadowColor("green")}
                className={`${
                  imageShadowColor == "green" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Green</p>
                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "yellow"}
                onClick={() => setShadowColor("yellow")}
                className={`${
                  imageShadowColor == "yellow" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Yellow</p>
                <span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={imageShadowColor == "sm"}
                onClick={() => setShadowColor("sm")}
                className={`${
                  imageShadowColor == "sm" ? "text-black" : "text-gray-500"
                } cursor-pointer flex items-center justify-between`}
              >
                <p>Purple</p>
                <span className="w-5 h-5 bg-purple-500 rounded-full"></span>
              </MenubarCheckboxItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <Radius className="w-5 h-5 " strokeWidth={1.5} />
            Roundness
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={imageRoundness == "sm"}
            onClick={() => setImageRoundness("sm")}
            className={`${
              imageRoundness == "sm" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Small
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "md"}
            onClick={() => setImageRoundness("md")}
            className={`${
              imageRoundness == "md" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Medium
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "lg"}
            onClick={() => setImageRoundness("lg")}
            className={`${
              imageRoundness == "lg" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Large
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "xl"}
            onClick={() => setImageRoundness("xl")}
            className={`${
              imageRoundness == "xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "2xl"}
            onClick={() => setImageRoundness("2xl")}
            className={`${
              imageRoundness == "2xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger x2
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "3xl"}
            onClick={() => setImageRoundness("3xl")}
            className={`${
              imageRoundness == "3xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger x3
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={imageRoundness == "full"}
            onClick={() => setImageRoundness("full")}
            className={`${
              imageRoundness == "full" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Full
          </MenubarCheckboxItem>
        </MenubarContent>
      <ImagePosition/>
      </MenubarMenu>
      <h2 className="text-center text-xs w-full font-medium   my-2 text-gray-400 select-none">
        Canvas options
      </h2>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 " strokeWidth={1.5} />
            Background
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <AlignVerticalSpaceAround
              className="w-5 h-5 font-light"
              strokeWidth={1.5}
            />
            Padding
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            className={`${
              padding == 5 ? "text-black " : "text-gray-500"
            } cursor-pointer`}
            onClick={() => setPadding(5)}
            checked={padding == 5}
          >
            Small
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => setPadding(10)}
            checked={padding === 10}
            className={`${
              padding == 10 ? "text-black " : "text-gray-500"
            } cursor-pointer`}
          >
            Medium
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => setPadding(20)}
            checked={padding === 20}
            className={`${
              padding == 20 ? "text-black " : "text-gray-500"
            } cursor-pointer`}
          >
            Large
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            onClick={() => setPadding(32)}
            checked={padding === 32}
            className={`${
              padding == 32 ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="sideBarItem">
          <div className="flex items-center gap-2">
            <Radius className="w-5 h-5 " strokeWidth={1.5} />
            Roundness
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={canvasRoundness == "sm"}
            onClick={() => setCanvasRoundness("sm")}
            className={`${
              canvasRoundness == "sm" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Small
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "md"}
            onClick={() => setCanvasRoundness("md")}
            className={`${
              canvasRoundness == "md" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Medium
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "lg"}
            onClick={() => setCanvasRoundness("lg")}
            className={`${
              canvasRoundness == "lg" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Large
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "xl"}
            onClick={() => setCanvasRoundness("xl")}
            className={`${
              canvasRoundness == "xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "2xl"}
            onClick={() => setCanvasRoundness("2xl")}
            className={`${
              canvasRoundness == "2xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger x2
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "3xl"}
            onClick={() => setCanvasRoundness("3xl")}
            className={`${
              canvasRoundness == "3xl" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Larger x3
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={canvasRoundness == "full"}
            onClick={() => setCanvasRoundness("full")}
            className={`${
              canvasRoundness == "full" ? "text-black" : "text-gray-500"
            } cursor-pointer`}
          >
            Full
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
