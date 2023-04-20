import React from "react";
import HeroImage from "../assets/portfolio/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a7164415731546a434e353768316c6275757a766368672e676966.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
    style={{ backgroundColor: "white" }}
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 + years of experience building websites and desgining software.
            I love to work on web application using technologies like
            HTML,CSS,React,JavaScript, etc...
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
