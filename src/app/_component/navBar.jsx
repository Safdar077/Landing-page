import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-16 px-6 shadow-md backdrop-blur-sm bg-white/10">
      <div className="flex items-center gap-3">
        <Image
          src="/Sitezen_logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
        <span className="text-xl font-semibold">Sitezen solution</span>
      </div>

      <div >
        <Link href="#" className="px-5 py-3 hover:bg-white/30 text-base rounded-full">
          Home
        </Link>

        <Link href="#" className="px-5 py-3 hover:bg-white/30 text-base rounded-full">
          About
        </Link>

        <Link href="#" className="px-5 py-3 hover:bg-white/30 text-base rounded-full">
          Services
        </Link>

        <Link href="#" className="p-3 hover:bg-white/30 text-base rounded-full">
          Contact us
        </Link>
      </div>
    </nav>
  );
}
