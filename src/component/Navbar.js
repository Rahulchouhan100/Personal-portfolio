import { useState } from "react";
import Logo from "../assest/logo.png";
import searchIcon from "../assest/searchicon.png";
import DarkIcon from "../assest/night-mode.png";
import LightIcon from "../assest/light-mode.png";
import TypingAnimation from "../utils/TypingAnimation";
const Navbar = () => {
  const [searchinput, setSearchInput] = useState("hello");
  const [displayText, setDisplayText] = useState("");
  return (
    <>
      <div className="px-5 py-2 flex justify-between items-center">
        <section className="flex  items-center w-4/6 px-2">
          <img src={Logo} alt="logo" className="w-36" />
          <div>
            <div className="flex items-center justify-center  rounded-full shadow-md ml-14">
              <div>
                <input
                  type="text"
                  className="w-[30rem] px-4 py-3 bg-transparent outline-none border-none rounded-full ouline-none text-1xl"
                  value={searchinput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setDisplayText(e.target.value);
                  }}
                />
                <TypingAnimation text={displayText} delay={100} />
              </div>
              <img src={searchIcon} alt="icon" className="w-10 pr-4" />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-end w-1/6">
          <div>
            <img src={LightIcon} alt="" className="w-6" />
          </div>
          <div className="rounded-full w-7 h-7 bg-slate-500 ml-5 text-2xl  text-white">
            R
          </div>
        </section>
      </div>
    </>
  );
};
export default Navbar;
