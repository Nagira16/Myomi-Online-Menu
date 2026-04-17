import Image from "next/image";

function Header() {
  return (
    <nav className="bg-white h-20 w-full flex items-center px-8 relative">
      <div className="flex justify-center w-60 h-7">
        <Image
          src="/myomi_logo.webp"
          alt="Myomi Logo"
          width={240}
          height={28}
        />
      </div>
      <div className="left-1/2 -translate-x-1/2 absolute">
        <h3 className="text-black text-[25px] font-bold">Online Menu</h3>
      </div>
    </nav>
  );
}

export default Header;
