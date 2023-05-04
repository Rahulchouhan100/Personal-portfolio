import React, { useState } from "react";
import downloadIcon from "../assest/download.png";
import profilePic from "../assest/profile.png";
import contactIcon from "../assest/call.png";
import linkedinIcon from "../assest/linkedin-logo.png";
import gitIcon from "../assest/github.png";
import mailIcon from "../assest/email.png";
import downArrow from "../assest/down.png";
import upArrow from "../assest/up.png";
import { Link } from "react-router-dom";

const Body = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div>
      <div className="flex ml-[15.5rem] mt-2 justify-between gap-2">
        <section className=" basis-8/12">
          <h2 className="text-xl text-blue-800 font-normal">
            Rahul Chouhan : Frontend Developer
          </h2>
          <p className="text-gray-500">
            Frontend Engineer with a passion for developing innovative programs
            <br /> that expedite the efficiency and effectiveness organizational
            <br />
            success.
          </p>
          {/* -------- project ----------------  */}
          <div></div>
          <div className="w-4/5 mb-2">
            <h3 className="text-2xl mt-5">People Also Ask :</h3>
            <div className="flex items-center justify-between border-t">
              <p className="text-gray-700 font-semibold text-lg">
                What skills does Rahul have?
              </p>
              {show ? (
                <button onClick={() => setShow(false)}>
                  <img src={upArrow} alt="icon" className="w-4" />
                </button>
              ) : (
                <button onClick={() => setShow(true)}>
                  <img src={downArrow} alt="icon" className="w-8" />
                </button>
              )}
            </div>
            {show ? (
              <p className="text-gray-500">
                Rahul is well versed in React JS, Javascript, Redux
                toolkit,HTML, CSS, Tailwind
                <Link to="/skills">View More...</Link>
              </p>
            ) : null}
          </div>
          <div className="w-4/5 mb-2">
            <div className="flex items-center justify-between border-t">
              <p className="text-gray-600 font-semibold text-lg">
                Is Rahul frontend or backend developer?
              </p>
              {show2 ? (
                <button onClick={() => setShow2(false)}>
                  <img src={upArrow} alt="icon" className="w-4" />
                </button>
              ) : (
                <button onClick={() => setShow2(true)}>
                  <img src={downArrow} alt="icon" className="w-8" />
                </button>
              )}
            </div>
            {show2 ? (
              <p className="text-gray-500">
                Rahul is frontend developee but he has been learning backend as
                well
                <Link to="/skills">View More...</Link>
              </p>
            ) : null}
          </div>
          <div className="w-4/5">
            <div className="flex items-center justify-between border-t">
              <p className="text-gray-600 font-semibold text-lg">
                Is Rahul frontend or backend developer?
              </p>
              {show3 ? (
                <button onClick={() => setShow3(false)}>
                  <img src={upArrow} alt="icon" className="w-4" />
                </button>
              ) : (
                <button onClick={() => setShow3(true)}>
                  <img src={downArrow} alt="icon" className="w-8" />
                </button>
              )}
            </div>
            {show3 ? (
              <p className="text-gray-500">
                Rahul is frontend developee but he has been learning backend as
                well
                <Link to="/skills">View More...</Link>
              </p>
            ) : null}
          </div>
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
                </li>
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
