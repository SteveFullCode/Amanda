"use client";

import Image from "next/image";
import Amanda from "@/assets/Amandasobre.png";

export default function Sobre() {
  return (
    <section className="w-full h-auto px-4 pb-10 hidden" id="sobre ">
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">
        <div>
          <h2>Olá,</h2>
        </div>
        <Image
          src={Amanda}
          alt="Eu"
          height={600}
          width={500}
          className="rounded-3xl mx-auto md:mx-0"
        />
      </div>
    </section>
  );
}
