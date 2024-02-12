import React from "react";

const Hero = () => {
  return (
    <main className="h-[calc(100vh-80px)] w-[80vw] m-auto flex items-center justify-center ">
      <section className="text-center flex flex-col gap-5">
        <h1 className="lg:text-7xl md:text-6xl font-bold text-white">Elevate your images to the next level</h1>
        <p className="text-gray-300 w-[90%] m-auto">
          Turn your ideas into reality with our powerful editing tool,
          screenshots, web images, logos, with just few buttons
        </p>
      </section>
    </main>
  );
};

export default Hero;
