import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

import { IoCloseSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";

function Menu() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.querySelector(".main").classList.add("heading");
    }
  });

  return (
    <>
      {isOpen && (
        <div className="absolute z-50">
          <div className="w-screen h-screen backdrop-blur-sm ">
            <div className="w-1/2 mx-auto h-screen flex flex-col justify-center main">
              <button
                type="button"
                className="flex items-center hover:text-red-400 duration-150 p-2 ml-auto font-medium rounded-md"
                onClick={handleClose}
              >
                <IoCloseSharp />
                Close
              </button>
              <div>
                <nav className="bg-white rounded-[3rem] drop-shadow-2xl navList ">
                  <ul className="flex justify-center flex-col">
                    <li>
                      <Link to="/" className="links">
                        <IoHome className="spaced-item" />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="explore" className="links">
                        <MdExplore className="spaced-item" />
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link to="gallery" className="links">
                        <GrGallery className="spaced-item" />
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="about" className="links">
                        <SiAboutdotme className="spaced-item" />
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" className="links">
                        <BiSolidContact className="spaced-item" />
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
