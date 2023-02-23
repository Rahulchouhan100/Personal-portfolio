import React from "react";
import downloadIcon from "../assest/download.png";
import profilePic from "../assest/profile.png";
import contactIcon from "../assest/call.png";
import linkedinIcon from "../assest/linkedin-logo.png";
import gitIcon from "../assest/github.png";
import mailIcon from "../assest/email.png";

const Body = () => {
  return (
    <div>
      <div className="flex ml-[15.5rem] mt-2 justify-between gap-2">
        <section className=" basis-8/12">
          <h2 className="text-xl text-blue-800 font-normal">
            Rahul Chouhan : Frontend Developer
          </h2>
          <p className="text-gray-500">
            Frontend Engineer with a passion for developing innovative programs
            <br /> that expedite the efficiency and effectiveness organizational{" "}
            <br />
            success.
          </p>
        </section>
        <section className="basis-2/6 mr-14">
          <div className="border rounded-lg sticky  top-4 right-0">
            <aside className=" p-2 flex flex-col justify-center items-center gap-y-3 ">
              <img src={profilePic} alt="" className="w-40" />
              <p className="text-gray-500 text-center">
                I am a driven individual with a passion for web development and
                a desire to create visually stunning and user-friendly web
                experiences.
              </p>
              <a href="">
                <button className="border-2 rounded-full py-1 flex items-center justify-center bg-gray-200 w-52 hover:bg-gray-300 ">
                  <span className="text-lg font-bold">Download CV</span>
                  <img src={downloadIcon} alt="" className="w-5" />
                </button>
              </a>
            </aside>
            <div className="p-4">
              <ul>
                <li className="flex items-center gap-2 mb-2">
                  <img src={mailIcon} alt="" className="w-5" />
                  <a className="text-blue-700 cursor-pointer">
                    rahulchouhan8991@gmail.com
                  </a>
                </li>{" "}
                <li className="flex items-center gap-2 mb-2">
                  <img src={contactIcon} alt="" className="w-5" />
                  <a className="text-gray-500 cursor-pointer">+91 9304138016</a>
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <img src={linkedinIcon} alt="" className="w-5" />
                  <a className="text-blue-700 cursor-pointer">
                    Linkedin Profile
                  </a>
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <img src={gitIcon} alt="" className="w-5" />
                  <a className="text-blue-700 cursor-pointer">Github Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
