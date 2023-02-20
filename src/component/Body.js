import React from "react";
import SkiilIcon from "../assest/pencil.png";
import ContactIcon from "../assest/contact.png";
import ProjectIcon from "../assest/project.png";
import SearchIcon from "../assest/searchicon.png";
import { Link } from "react-router-dom";
import profilePic from "../assest/profile.png";
import downloadIcon from "../assest/download.png";

const Body = () => {
  return (
    <div>
      <div className="flex gap-6  pl-[15rem] border-b-2 ">
        <section className="flex items-center gap-2">
          <img src={SearchIcon} alt="" className="w-4" />
          <h2>About</h2>
        </section>
        <section className="flex items-center gap-2">
          <img src={SkiilIcon} alt="" className="w-4" />
          <h2>Skills</h2>
        </section>
        <section className="flex items-center gap-2">
          <img src={ProjectIcon} alt="" className="w-4" />
          <h2>Project</h2>
        </section>
        <section className="flex items-center gap-2">
          <img src={ContactIcon} alt="" className="w-4" />
          <h2>Contact</h2>
        </section>
      </div>
      {/* ----------- About section ------------------  */}
      <div className="flex  mt-6 justify-center gap-5 ml-[12.5rem]">
        <section className="basis-2/4 border-2">
          <div>
            <h2 className="text-xl text-blue-800 font-normal">
              Rahul chouhan : Frontend Developer
            </h2>
            <p className="text-gray-500">
              Frontend Engineer with a passion for developing innovative
              programs
              <br /> that expedite the efficiency and effectiveness
              organizational <br />
              success.
            </p>
          </div>
        </section>
        <section className="basis-5/12">
          <div className="text-center flex flex-col justify-center items-center px-5 py-2 border-2 rounded-md gap-3">
            <img
              src={profilePic}
              alt=""
              className="w-40 shadow-lg border-2 p-1"
            />
            <p className="text-gray-500">
              I am a driven individual with a passion for web development and a
              desire to create visually stunning and user-friendly web
              experiences.
            </p>
            <a href="">
              <button className="border-2 rounded-full py-1 flex items-center justify-center bg-gray-200 w-52 hover:bg-gray-300 ">
                <span className="text-lg font-bold">Download CV</span>
                <img src={downloadIcon} alt="" className="w-5" />
              </button>
            </a>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
