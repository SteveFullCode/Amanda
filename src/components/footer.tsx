import Link from "next/link";
import Wpp from "@/assets/Wpp.svg";
import Image from "next/image";
import Insta from "@/assets/instagram-svgrepo-com.svg";
function Footer() {
  return (
    <footer className="w-full h-full py-7 px-3 bg-zinc-200 rounded-t-full ">
      <div className="flex justify-between items-center  container">
        <h2 className="font-semibold text-lg">
          <Link
            href="https://stevedev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SteveDev © 2024
          </Link>
        </h2>
        <span className="flex gap-2 items-center">
          <Link href="https://wa.me/+558599185575?text=" target="_blank">
            <Image src={Wpp} alt="Whatsapp" width={35} />
          </Link>
          <Link
            href="https://www.instagram.com/amandafernandesestetica/"
            target="_blank"
          >
            <Image src={Insta} alt="insta" width={30} />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
