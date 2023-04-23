import MobileMenu from "./Menu";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full bg-black text-white" id="home">
      <div className="mx-auto flex h-20 max-w-[90%] items-center justify-between md:px-8 lg:px-16">
        <div className="font-bold text-2xl">Logo</div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-12 font-bold uppercase hover:[&>*]:text-main-100 [&>*]:cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>

            <li>Contact</li>
            <li className="btn !text-white">Hire Me</li>
          </ul>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
