import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-[#8fa3b3] h-20 w-full flex items-center px-8 relative">
      <Link href="/" className="flex justify-center w-60 h-7 cursor-default">
        <Image
          src="/myomi_logo.webp"
          alt="Myomi Logo"
          width={240}
          height={28}
        />
      </Link>
      <div className="left-1/2 -translate-x-1/2 absolute">
        <h3 className="text-white text-[25px] font-bold">Online Menu</h3>
      </div>
    </nav>
  );
}

export default Header;
