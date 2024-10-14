import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto bg-base-200">
      <div className="p-10 mx-auto footer max-w-7xl text-base-content">
        <div>
          <h1 className="text-2xl font-bold md:text-4xl text-nowrap">
            <span className="text-blue-600">Sit</span>{" "}
            <span className="text-orange-600">Well</span>
          </h1>
          <p className="mt-4 font-bold ">123 Satkhira, Khulna, Bangladesh</p>
          <p className="font-bold ">Phone: +123-456-7890</p>
          <p className="font-bold ">Email: example@gmail.com</p>
          <div className="flex items-center gap-3 text-2xl">
            <FaFacebook className="hover:text-blue-600"></FaFacebook>
            <FaInstagram className="hover:text-orange-500"></FaInstagram>
            <FaLinkedinIn className="hover:text-blue-600"></FaLinkedinIn>
          </div>
        </div>
        <nav>
          <h6 className="text-xl font-bold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold ">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold ">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <aside className="pb-6 text-center bg-base-200">
        <p className="px-6">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-bold">Sit Well Co.</span>
        </p>
      </aside>
    </div>
  );
};

export default Footer;
