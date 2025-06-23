import React from 'react';
import logoImage from '../assets/Logo.png';
import { navbarLinks } from '../data';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebook, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto container px-0 lg:px-8 pt-12 text-white">
      <div className="bg-[#191A23] rounded-0 lg:rounded-t-3xl px-15 py-15">
        <div className="col-1 flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="logo">
            <img src={logoImage} alt="logo-image" />
          </div>

          <div className="links flex flex-col lg:flex-row text-center gap-4 lg:gap-8">
            {navbarLinks.map((link) => {
              return (
                <ul key={link.id}>
                  <li className="underline">
                    <a href={link.href}>{link.text}</a>
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="icons space-x-4">
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaLinkedinIn className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaFacebookF className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaTwitter className="text-[#191A23]" />
            </button>
          </div>
        </div>
        <div className="col-2 py-15 flex flex-col lg:flex-row gap-5 items-center justify-between">
          <div className="left space-y-5 text-center lg:text-start">
            <SectionHeading heading="Contact us:" />
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="right flex bg-[#292A32] p-15 rounded-xl mt-5">
            <form className="flex gap-8 flex-col lg:flex-row justify-between">
              <input
                type="email"
                placeholder="Email"
                className="placeholder-white border border-white px-[15px] py-[10px] md:px-[22px] md:py-[15px] rounded-xl"
              />
              <button>
                <Button
                  className="bg-[#B9FF66] text-black"
                  text="Subscribe to news"
                />
              </button>
            </form>
          </div>
        </div>
        <hr className="my-8" />
        <div className="col-3 flex flex-col lg:flex-row gap-3 lg:gap-8 text-center">
          <h3>© {new Date().getFullYear()} Positivus. All Rights Reserved.</h3>
          <h3 className="underline">Privacy Policy</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
