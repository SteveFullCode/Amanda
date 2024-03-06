"use client";

import Menu from "./menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/assets/logoA.png";
import TemporaryDrawer from "./drawer";

export default function Header() {
  return (
    <section className="w-full py-2 md:py-5 px-3">
      <div className="flex justify-between items-center ">
        <div className="">
          <Image src={Logo} alt="logo" width={80} />
        </div>
        <Menu />
        <div className="flex gap-4 ">
          <Button className=" hidden py-2 px-8 md:py-5 md:px-16 rounded-xl font-semibold bg-fuchsia-900 hover:bg-fuchsia-700">
            Reservar
          </Button>
          <TemporaryDrawer />
        </div>
      </div>
    </section>
  );
}
