import React from "react";
import "./Pages.css";
import { NavLink } from "react-router-dom";
import { BsArrowUpLeftCircle, BsFillSuitHeartFill } from "react-icons/bs";
import { FaWaveSquare, FaHourglassHalf } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="home_main_div">
        <div className="home_parant_div">
          <div className="prepare_div">
            <h1 className="ginogoba">ROSE</h1>
            <h1 className="prepare_h">
            What is scientific name of rose?
            </h1>
            <p className="brown_p">
            Rosa rubiginosa is the scientific name for rose. Roses belong to the Rosaceae family, and there are about 360 species in the genus Rosa.
     
            </p>
            <NavLink to="/products">
              <button className="go_to">Go To Our Products</button>
            </NavLink>
          </div>
          <div className="home_img_div">
            <img src="rose1.jpg" className="home_img" />
          </div>
        </div>
        <div className="grow_up_div">
          <div className="parant_grow_div">
            <div className="importance">
              <div className="arrow_div">
                <FiArrowUpLeft className="arrow" />
                <h2 className="heading_grow">Where is rose grown?</h2>
                <p className="paracommon">
                Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.
                </p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <FaWaveSquare className="arrow" />
                <h2 className="heading_grow">Where is rose grown?</h2>
                <p className="paracommon">Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.</p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <BsFillSuitHeartFill className="arrow" />
                <h2 className="heading_grow">Where is rose grown?</h2>
                <p className="paracommon">Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.</p>
              </div>
            </div>
            <div className="importance">
              <div className="arrow_div">
                <FaHourglassHalf className="arrow" />
                <h2 className="heading_grow">Where is rose grown?</h2>
                <p className="paracommon">Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
