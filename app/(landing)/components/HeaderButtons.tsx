import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant={"header"}
        className="text-[#00747C] bg-white hover:bg-gray-300 p-0 transition w-[80px] rounded-lg text-xs"
      >
        <Link href={'/Edit'} className=" w-full h-full flex items-center justify-center">Try it</Link>
      </Button>
      <Button
        variant={"header"}
        className="bg-[#00747C]  p-0 transition w-[80px] rounded-lg text-xs"
      >
        <Link href={'/'} className=" w-full h-full flex items-center justify-center">Log in</Link>
      </Button>
    </div>
  );
};

export default HeaderButtons;
