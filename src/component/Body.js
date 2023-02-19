import React from "react";
import SkiilIcon from "../assest/pencil.png";
import ContactIcon from "../assest/contact.png";
import ProjectIcon from "../assest/project.png";
import SearchIcon from "../assest/searchicon.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className="flex gap-6  pl-[21rem] border-b-2">
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
      <section>helo</section>
    </div>
  );
};

export default Body;
