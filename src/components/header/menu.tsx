import React from "react";
import NavLink from "./navLink";

const navLinks = [
  {
    title: "Serviços",
    path: "#serviços",
  },
  {
    title: "Sobre/Agendamentos",
    path: "#regras",
  },
  {
    title: "Sobre",
    path: "#sobre",
  },
];

export default function Menu() {
  return (
    <main className="menu md:w-auto">
      <div className="md:flex items-center hidden">
        <ul className=" md:gap-10 xl:gap-40 sm:gap-10 gap-5 flex font-bold">
          {navLinks.map((link) => (
            <li key={link.title} className="hover:text-fuchsia-900">
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
