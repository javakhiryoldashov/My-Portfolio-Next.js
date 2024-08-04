"use client";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import MenuBtn from "@/components/MenuBtn";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievmentsSection";
import AboutTitles from "@/components/AboutTitles";
import AllProjects from "@/components/AllProjects";

const navlist = [
  {
    name: "About",
    path: "about",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
const aboutList = {
  Skills: ["JavaScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  Education: ["Najot Ta'lim"],
  Certifications: ["Frontend React JS soon"],
};
const myProjects = {
  web: [
    {
      id: 1,
      name: "Project 1",
      image: "/1img.png",
      description: "This is project",
      link: "8-oy-3-dars-seven.vercel.app",
      gitUrl: "https://github.com/javakhiryoldashov/8-oy_3-dars.git",
    },
    {
      id: 2,
      name: "Project 2",
      image: "/2img.png",
      description: "This is project",
      link: "7-oy-imtihon-psi.vercel.app",
      gitUrl: "https://github.com/javakhiryoldashov/7-oy_imtihon.git",
    },
    {
      id: 3,
      name: "Project 3",
      image: "/3img.png",
      description: "This is project",
      link: "8-oy-4-dars-sigma.vercel.app",
      gitUrl: "https://github.com/javakhiryoldashov/8-oy_4-dars.git",
    },
  ],
  mobile: [
    {
      id: 4,
      name: "Project 4",
      image: "/4img.png",
      description: "This is project",
      link: "8-oy-6-dars-lake.vercel.app",
      gitUrl: "https://github.com/javakhiryoldashov/8-oy_6-dars.git",
    },
  ],
};
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [isActive, setIsActive] = useState(`Skills`);
  const [activePage, setActivePage] = useState(`All`);

  return (
    <>
      <header
        className="fixed bg-[#121212] mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-opacity-100"
        id="header"
      >
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link href="/" className="inline-block">
            <h2 className="text-2xl md:text-5xl text-white font-semibold">
              LOGO
            </h2>
          </Link>
          <MenuBtn menu={menu} setMenu={setMenu} />
          <nav className="hidden md:block md:w-auto">
            <ul className="flex gap-8">
              <Navbar navlist={navlist} />
            </ul>
          </nav>
        </div>
        {menu ? (
          <ul className="flex flex-col py-4 items-center">
            <Navbar navlist={navlist} />
          </ul>
        ) : (
          <></>
        )}
      </header>
      <main className="container mt-24 mx-auto px-12 py-4">
        <Toaster />
        <section className="lg:py-16">
          <HeroSection />
        </section>
        <section>
          <AchievementsSection />
        </section>
        <section className="text-white" id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p-16 xl:px-16">
            <Image src="/about.png" width={500} height={500} alt="img"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h3 className="text-4xl font-bold mb-4">About Me</h3>
              <p className="text-base lg:text-lg">
                I am a frontend web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, HTML, CSS, and GitHub. I
                am a quick learner and I am always looking to expand my
                knowledge and skill set. I am a team player and I am excited to
                work with others to create amazing applications.
              </p>
              <div className="mt-8 flex flex-row justify-start">
                <AboutTitles
                  aboutList={aboutList}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              </div>
              <div className="mt-8">
                <ul className="list-disc pl-2">
                  {aboutList[isActive].map((item, index) => (
                    <li className="text-base lg:text-lg" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
          </h2>
          <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <button
              className={`${
                activePage === "All"
                  ? "border-purple-500 text-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
                  : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
              }`}
              onClick={() => setActivePage("All")}
            >
              All
            </button>
            <button
              className={`${
                activePage === "Web"
                  ? "border-purple-500 text-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
                  : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
              }`}
              onClick={() => setActivePage("Web")}
            >
              Web
            </button>
            <button
              className={`${
                activePage === "Mobile"
                  ? "border-purple-500 text-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
                  : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
              }`}
              onClick={() => setActivePage("Mobile")}
            >
              Mobile
            </button>
          </div>
          <div>
            {activePage === "All" && (
              <>
                <AllProjects
                  projects={[...myProjects.web, ...myProjects.mobile]}
                />
              </>
            )}
            {activePage === "Web" && (
              <>
                <AllProjects projects={myProjects.web} />
              </>
            )}
            {activePage === "Mobile" && (
              <>
                <AllProjects projects={myProjects.mobile} />
              </>
            )}
          </div>
        </section>
        <section
          className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative"
          id="contact"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,#90DFAB_0%,#FD7256_100%)] from-primary-900 to-transparent rounded-full h-80 w-80 -z-40 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div>
            <h5 className="text-xl font-bold text-white my-2">
              Let&apos;s connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-row gap-4">
              <a href="https://github.com/javakhiryoldashov" target="_blank">
                <IoLogoGithub className="text-white text-[48px]" />
              </a>
              <a href="https://t.me/JavakhirYoldashov" target="_blank">
                <FaTelegram className="text-white text-[48px]" />
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required=""
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="john@gmail.com"
                  name="email"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required=""
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                  name="subject"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
