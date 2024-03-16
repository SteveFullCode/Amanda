import Amanda from "@/assets//logop.png";
import Amandas from "@/assets/amanda2.png";

import Comentarios from "@/components/avaliacao/comentarios";
import CardPromo from "@/components/cards/cardpromo";
import Regras from "@/components/regras";
import Servicos from "@/components/servicos";
import Sobre from "@/components/sobre";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full h-full container">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl md:text-5xl text-fuchsia-900">
          Amanda Fernandes
        </h1>
        <p className="text-sm md:text-xl text-zinc-600">
          Estética e cosmetologa
        </p>
      </div>
      <section className="flex flex-col-reverse md:flex-row items-center gap-5 justify-around pb-20 mb-10">
        <div className="md:max-w-xl flex flex-col gap-10 md:gap-40">
          <h1 className="text-2xl md:text-2xl lg:text-5xl text-center text-zinc-500">
            Cada transformação revela uma nova beleza interior. Deixe-me ajudar
            você a descobrir a sua!
          </h1>
          <Link
            href="https://wa.me/+558599185575?text=Sua%20mensagem%20aqui"
            target="_blank"
          >
            <Button className=" bg-fuchsia-900 w-full">Contate-me</Button>
          </Link>
        </div>
        <Image
          src={Amanda}
          alt="Eu"
          width={400}
          className="rounded-full bg-fuchsia-100"
        />
      </section>
      <div className="md:flex-row flex items-center justify-around md:gap-20  gap-10 flex-col mb-20 pb-16">
        <Image
          src={Amandas}
          alt="Eu"
          height={400}
          width={350}
          className="rounded-full bg-fuchsia-100"
        />
        <div className="md:max-w-2xl">
          <h3 className="text-center font-semibold text-2xl">
            Procedimentos Realizados
          </h3>{" "}
          <ul className="flex flex-col mt-10  text-xl gap-4 text-fuchsia-800">
            <li>Limpeza de pele</li>
            <li>Microagulhamento</li>
            <li>Peelings Químicos</li>
            <li>Hidratação Facial</li>
            <li>HidraGloss</li>
            <li>Massagem Relaxante</li>
            <li>Massagem com Ventosas</li>
            <li>Método Nazaré Santos de drenagem</li>
          </ul>
        </div>
      </div>
      <div className="flex-col flex items-center px-5 gap-10">
        <CardPromo />
        <Servicos />
        <Regras />
      </div>
      <Sobre />
      <Comentarios />
    </main>
  );
}
