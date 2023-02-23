import React from "react";
import { Link } from "react-router-dom";
import { skillDetails } from "../utils/constant";

const Skill = () => {
  return (
    <div className="ml-[15.2rem] mt-4 w-2/3 cursor-text">
      <Link to="/skills">
        <div>
          <p className="w- full text-gray-500 ">
            Welcome to my journey of continuous learning and growth! I am a
            driven individual with a passion for web development and a desire to
            create visually stunning and user-friendly web experiences. With a
            solid foundation in HTML, CSS, JavaScript, React,Typescript and Git,
            I am always striving to expand my skills and knowledge in this
            ever-evolving field.
          </p>
          <div className="flex  items-center gap-20 text-center mt-6">
            <section className=" w-2/4 p-6 bg-gray-100 rounded-md hover:bg-gray-200 cursor-default">
              <h2 className="text-xl">Frontend Skills</h2>
              <p className="font-semibold text-gray-700">
                React, Redux-Toolkit, Javascript, Tailwind, <br /> Material Ui ,
                CSS3 ,HTML5
              </p>
            </section>
            <section className=" w-2/4 p-6 bg-gray-100 rounded-md hover:bg-gray-200 cursor-default">
              <h2 className="text-xl ">Familiar with</h2>
              <p className="font-semibold text-gray-700">
                Node Js, Express Js, Git, Netlify,Postman, <br />
                Vercel
              </p>
            </section>
          </div>
          <div className="flex flex-wrap justify-center gap-5 items-center mt-5">
            {skillDetails.map((e) => (
              <>
                <div>
                  <div className="px-14 py-5 flex items-center justify-center flex-col shadow-blue-200  shadow-md bg-gray-100 transition-all">
                    <img src={e.icon} alt="icon" className="w-10" />
                    <h2 className="text-xl font-bold">{e.skill}</h2>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Skill;
