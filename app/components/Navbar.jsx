import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePage(window.location.pathname);
    }
  }, []);

  return (
    <div className="z-[999] w-full px-5 md:px-16 py-8 flex items-center justify-between">
      {/* logo-dec */}
      <div className="logo">
        <Image src={"/neurocode-nav-logo.svg"} width={150} height={20} alt="Neurocode Logo" />
      </div>

      {/* nav-links */}
      <div className="links gap-10 hidden lg:flex">
        <NavLink href="/" isActive={activePage === "/"}>Home</NavLink>
        <NavLink href="/about" isActive={activePage === "/about"}>About</NavLink>
        <NavLink href="/services" isActive={activePage === "/services"}>Services</NavLink>
        <NavLink href="/portfolio" isActive={activePage === "/portfolio"}>Portfolio</NavLink>
        <NavLink href="/careers" isActive={activePage === "/careers"}>Careers</NavLink>
        <NavLink href="/contactus" isActive={activePage === "/contactus"} className="ml-[10vw]">Contact us</NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ href, children, className = "", isActive }) => {
  return (
    <Link href={href} className={`group text-md font-medium relative ${className}`}>
      {children}
      <span
        className={`${
          isActive ? 'scale-x-100' : 'scale-x-0'
        } absolute left-0 bottom-0 w-full h-0.5 bg-current transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
      />
    </Link>
  );
};

export default Navbar;
