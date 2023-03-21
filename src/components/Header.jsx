import React, { useState } from "react";

const Header = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div>
      <nav>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <h1 className="m-0">LOGO</h1>
            <ul className="list-unstyled d-lg-flex align-items-center mb-0 d-none">
              <li className="px-3">
                <a href="#section1">HOME</a>
              </li>
              <li className="px-3">
                <a href="#section2">HOME</a>
              </li>
              <li className="px-3">
                <a href="#section3">HOME</a>
              </li>
              <li className="px-3">
                <a href="#section4">HOME</a>
              </li>
              <li className="px-3">
                <button>Contact</button>
              </li>
            </ul>
            <div
              className={`overlay position-fixed d-flex flex-column justify-content-center align-items-center w-100  ${
                overlay ? "active_overlay" : ""
              } `}
              id="overlay"
            >
              <ul className="list-unstyled mb-0">
                <li className="px-3" onClick={() => setOverlay(false)}>
                  <a href="#section1">HOME</a>
                </li>
                <li className="px-3" onClick={() => setOverlay(false)}>
                  <a href="#section2">HOME</a>
                </li>
                <li className="px-3" onClick={() => setOverlay(false)}>
                  <a href="#section3">HOME</a>
                </li>
                <li className="px-3" onClick={() => setOverlay(false)}>
                  <a href="#section4">HOME</a>
                </li>
                <li className="px-3" onClick={() => setOverlay(false)}>
                  <button>Contact</button>
                </li>
              </ul>
              <button className="cross_btn" onClick={() => setOverlay(false)}>
                Cross Btn
              </button>
            </div>
            <div className="d-lg-none" onClick={() => setOverlay(!overlay)}>
              Toggle btn
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
