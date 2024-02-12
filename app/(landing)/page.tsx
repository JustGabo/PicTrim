import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="p-5 bg-[#121212] w-full h-screen flex flex-col gap-10">
      <Header/>
      <Hero/>
    </main>
  );
}
