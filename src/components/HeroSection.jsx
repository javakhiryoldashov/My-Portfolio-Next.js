"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";
import avatar from "./../../public/avatar.png";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start justify-self-center"
      >
        <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Hello, I&apos;m
          </span>
          <br />
          <TypeAnimation
            sequence={["Javohir", 1500, "Web Developer", 1500, "Creative Thinker",1500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptuous. */} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor laudantium voluptas eveniet ratione illum incidunt architecto qui totam repellat animi tempora et ad iste expedita, officia esse quaerat dicta voluptatibus.
        </p>
        <div className="">
          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:bg-slate-200 text-white"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-800 text-white mt-3"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("Link copied");
            }}
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors">
              Copy link
            </span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <Image
          src={avatar}
          alt="Avatar"
          className="rounded-full bg-[#181818]"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
}
