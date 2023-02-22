import searchIcon from "../assest/searchicon.png";
import skillsIcon from "../assest/pencil.png";
import projectIcon from "../assest/project.png";
import contactIcon from "../assest/contact.png";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div className="ml-60 border-b-2">
        <ul className="flex gap-1">
          <Link to="/">
            <li className="flex items-center p-2 cursor-pointer">
              <img src={searchIcon} alt="" className="w-4 mr-[.3rem]" />
              <span>About</span>
            </li>
          </Link>

          <Link to="/skills">
            <li className="flex items-center p-2 cursor-pointer">
              <img src={skillsIcon} alt="" className="w-4 mr-[.3rem]" />
              <span>Skills</span>
            </li>
          </Link>
          <Link to="/project">
            <li className="flex items-center p-2 cursor-pointer">
              <img src={projectIcon} alt="" className="w-4 mr-[.3rem]" />
              <span>Project</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center p-2 cursor-pointer">
              <img src={contactIcon} alt="" className="w-4 mr-[.3rem]" />
              <span>Contact</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Links;
