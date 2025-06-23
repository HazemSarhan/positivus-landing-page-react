import logoImage from '../assets/Frame 9.png';
import Button from './ui/Button';
import { navbarLinks } from '../data';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center gap-5 w-full">
        {/* Logo */}
        <div className="image">
          <a href="/">
            <img src={logoImage} alt="logo" className="w-40" />
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-xl cursor-pointer"
        >
          {isMenuOpen ? <HiX /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div className="links hidden md:block">
          <ul className="flex justify-center items-center gap-[40px]">
            {navbarLinks.map((navLink) => {
              return (
                <li key={navLink.id} className="whitespace-nowrap">
                  <a href={navLink.href}>{navLink.text}</a>
                </li>
              );
            })}

            {/* Button */}
            <Button
              text="Request a quote"
              className="border border-black hover:bg-black hover:text-white duration-300"
            />
          </ul>
        </div>

        {isMenuOpen && (
          <>
            <div className="absolute top-[100%] left-0 w-full bg-white border-t border-black py-4 md:hidden z-50">
              <ul className="px-8 space-y-4">
                {navbarLinks.map((navLink) => {
                  return (
                    <li key={navLink.id} className="whitespace-nowrap">
                      <a href={navLink.href}>{navLink.text}</a>
                    </li>
                  );
                })}
                <Button
                  text="Request a quote"
                  className="border border-black hover:bg-black hover:text-white duration-300"
                />
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
