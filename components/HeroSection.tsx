"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const profileImg =
    currentTheme === "light" ? "/ProfileLight.gif" : "/Profile.gif";

  const lightImg =
    currentTheme === "light" ? "/BulbTiltLight.gif" : "/BulbTilt.gif";
    
  return (
    <section id="home" className="relative z-10">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/MonitorSet.gif"
            alt=""
            width={380}
            height={380}
            // className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Seoyeong!</h1>
            <Image
              src={lightImg}
              alt=""
              width={80}
              height={80}
              className="inline-block"
            />
          </div>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Arizona. Working towards creating software that
            makes life easier and more meaningful.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/seoyeong643"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white rounded-full p-2 flex items-center justify-center shadow-md"
              style={{ width: "40px", height: "40px" }}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/seoyeongoh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 flex items-center justify-center shadow-md"
              style={{ width: "40px", height: "40px" }}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:seoyeong.oh364@gmail.com"
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 flex items-center justify-center shadow-md"
              style={{ width: "40px", height: "40px" }}
            >
              <FaEnvelope size={24} />
            </a>
            {/* <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link> */}
          </div>

        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
