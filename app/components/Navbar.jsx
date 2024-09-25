import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePage(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="z-[999] w-full px-5 md:px-16 py-8 flex items-center justify-between">
      {/* logo-dec */}
      <div className="logo">
        <Image src={"/neurocode-nav-logo.svg"} width={150} height={20} alt="Neurocode Logo" />
      </div>

      {/* nav-links for desktop */}
      <div className="links gap-10 hidden lg:flex">
        <NavLink href="/" isActive={activePage === "/"}>Home</NavLink>
        <NavLink href="/about" isActive={activePage === "/about"}>About</NavLink>
        <NavLink href="/services" isActive={activePage === "/services"}>Services</NavLink>
        <NavLink href="/portfolio" isActive={activePage === "/portfolio"}>Portfolio</NavLink>
        <NavLink href="/careers" isActive={activePage === "/careers"}>Careers</NavLink>
        <NavLink href="/contact" isActive={activePage === "/contact"} className="ml-[10vw]">Contact us</NavLink>
      </div>

      {/* hamburger menu for mobile */}
      <div className={`menu block lg:hidden z-[99999999] ${isOpen ? 'fixed top-8 right-5 md:right-16' : ''}`}>
        <label className="hamburger cursor-pointer">
          <input type="checkbox" checked={isOpen} onChange={toggleMenu} className="hidden" />
          <svg viewBox="0 0 32 32" className="h-[3em] transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]">
            <path 
              className="line line-top-bottom transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path 
              className="line transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
              d="M7 16 27 16"
            />
          </svg>
        </label>
      </div>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 lg:hidden overflow-hidden z-[9999]"
          >
            <motion.div 
              className="flex flex-col items-center justify-center h-full py-8 px-4 space-y-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              <MobileNavLink href="/" isActive={activePage === "/"}>Home</MobileNavLink>
              <MobileNavLink href="/about" isActive={activePage === "/about"}>About</MobileNavLink>
              <MobileNavLink href="/services" isActive={activePage === "/services"}>Services</MobileNavLink>
              <MobileNavLink href="/portfolio" isActive={activePage === "/portfolio"}>Portfolio</MobileNavLink>
              <MobileNavLink href="/careers" isActive={activePage === "/careers"}>Careers</MobileNavLink>
              <MobileNavLink href="/contact" isActive={activePage === "/contact"}>Contact us</MobileNavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ href, children, className = "", isActive }) => {
  return (
    <Link href={href} className={`group text-md font-medium relative ${className} py-2`}>
      {children}
      <span
        className={`${
          isActive ? 'scale-x-100' : 'scale-x-0'
        } absolute left-0 bottom-0 w-full h-0.5 rounded-[5rem] bg-current transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
      />
    </Link>
  );
};

const MobileNavLink = ({ href, children, isActive }) => {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 },
      }}
    >
      <Link 
        href={href} 
        className={`text-2xl font-semibold ${isActive ? 'text-[#029acd]' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-200`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navbar;