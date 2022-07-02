import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaPinterestP } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../public/indipixLogo.png';


const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-10">
      <div className="grid md:grid-cols-4 gap-8 ">
        <div>
            <div className="flex">
            <Image src={logo} alt="logo"></Image>  
          <p className="text-white text-4xl font-semibold font-inter">
            Indi<span className="text-red-700">pix</span>
          </p>
            </div>

          <p className="text-white text-sm mt-10 text-justify font-nunito">
            orporate clients and leisure travelers has been relying on
            Groundlink for dependable safe, and professional chauffeured car
            service in major cities across World.
          </p>
        </div>

        <div className="text-white pl-32 ">
          <h1 className="text-2xl font-semibold">Usefull links</h1>
          <div className="mt-8 text-sm flex flex-col gap-2">
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">News</a>
            </p>
            <p>
              <a href="#">Partners</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Gallery</a>
            </p>
            <p>
              <a href="#">Contacts</a>
            </p>
          </div>
        </div>

        <div className="text-white pl-32 font-nunito">
          <h1 className="text-2xl font-semibold">Help?</h1>
          <div className="mt-8 text-sm flex flex-col gap-2">
            <p>
              <a href="#">FAQ</a>
            </p>
            <p>
              <a href="#">Term & conditions</a>
            </p>
            <p>
              <a href="#">Reporting</a>
            </p>
            <p>
              <a href="#">Documentation</a>
            </p>
            <p>
              <a href="#">Support Policy</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
          </div>
        </div>

        <div className="text-white pl-32 font-nunito">
          <h1 className="text-2xl font-semibold">Contact</h1>
          <div className="mt-8 text-sm flex flex-col gap-2">
            <p>
              <a href="mailto:indipix@gmail.com">indipix@gmail.com</a>
            </p>
            <p>
              <a href="https://www.indipix.com">indipix.com</a>
            </p>
            <p>
              <a href="tel:8812565678">88 12565678</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-between items-center">
        <div>
          <p>
            <span className="text-white">&copy;</span>
            <span className="text-red-700">{year}</span>
            <span className="text-white text-sm">, Indipix</span>
          </p>
        </div>
        <div className="md:mr-10 flex text-2xl gap-5">
            <a className="bg-gray-700 p-1 text-white rounded-md" href="#"><FaFacebookF/></a>
            <a className="bg-gray-700 p-1 text-white rounded-md" href="#"><BsTwitter/></a>
            <a className="bg-gray-700 p-1 text-white rounded-md" href="#"><FaInstagramSquare/></a>
            <a className="bg-red-600 p-1 text-white rounded-md" href="#"><IoLogoYoutube/></a>
            <a className="bg-gray-700 p-1 text-white rounded-md" href="#"><FaPinterestP/></a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
