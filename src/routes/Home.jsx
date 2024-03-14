import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import "../components/menu.css";

import { FaSearch } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import Slider from "../components/Slider";

function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        {click && <Menu />}
        <div>
          <div className="flex justify-around items-center pt-5">
            <Link to="/">
              <span className="font-semibold text-2xl select-none">
                <span className="font-body text-6xl">Solar</span> System
              </span>
            </Link>
            <div className="bg-slate-200 flex items-center rounded-l-2xl rounded-r-2xl cursor-pointer font-semibold">
              <FaSearch className="ml-16 mr-2" />
              <input
                type="text"
                placeholder="Search Planets..."
                className="px-5 py-3 outline-none bg-slate-200 rounded-r-2xl"
              />
            </div>
            <button
              type="botton"
              onClick={() => {
                setClick(!click);
              }}
              className="flex items-center"
            >
              Menu
              <ImMenu className="ml-3" />
            </button>
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
}

export default Home;
