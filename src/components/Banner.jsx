/* import React, { useState, useEffect } from "react";

import 'animate.css';


const Banner = ({tema}) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };


  const sensitivity = window.innerWidth > 1000 ? { x: 10, y: 10 } : { x: 50, y: 50 };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: (event.gamma) * 50,
      y: (event.beta - 20) * 50,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
        return () => {
          window.removeEventListener("deviceorientation", handleOrientation); 
        };
      }
    }, []);

    let x = 0;
    let y = 0;
    let limitedX = 0;
    let limitedY = 0;
    x = (position.x - window.innerWidth / 2) / sensitivity.x;
    y = (position.y - window.innerHeight / 2) / sensitivity.y;
    limitedX = Math.min(Math.max(x, -25), 25);
    limitedY = Math.min(Math.max(y, -25), 25);

  return (
    <div>
      <section className="banner-container">


        <div className={tema === "dark" ? "banner-dark" : "banner-light"}>

          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/imgBanner-02.png"
            alt="Deep-Eye-logo"
            border="0"
          />

          <div className={tema === "dark" ? "banner-eye-dark" : "banner-eye-light"}
          style={innerWidth> 1000? {
            transform: `translate(${limitedX}%, ${limitedY}%)`,
            transition: "transform .1s ease-out"} : {
              transform: `translate(${limitedX}%, ${-limitedY}%)`,
              transition: "transform .1s ease-out"}}>
          </div>

        </div>


        <div className={tema === 'dark' ? 'title-banner-dark' : 'title-banner-light'}>
          <h1></h1>
        </div>


      </section>
    </div>
  );
};

export default Banner; */


/* import React, { useState, useEffect, useRef } from "react";
import "animate.css";

const Banner = ({ tema }) => {
  const sensitivity =
    window.innerWidth > 1000 ? { x: 10, y: 10 } : { x: 50, y: 50 };

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bannerEyeRef = useRef(null);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: event.gamma * 50,
      y: (event.beta - 20) * 50,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, []);

  let x = 0;
  let y = 0;
  let limitedX = 0;
  let limitedY = 0;
  x = (position.x - window.innerWidth / 2) / sensitivity.x;
  y = (position.y - window.innerHeight / 2) / sensitivity.y;
  limitedX = Math.min(Math.max(x, -25), 25);
  limitedY = Math.min(Math.max(y, -25), 25);

  const handleClickBannerEye = () => {
    bannerEyeRef.current.classList.add("animate__rubberBand");
  };

  return (
    <div>
      <section className="banner-container">
        <div className={tema === "dark" ? "banner-dark" : "banner-light"}>
          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/imgBanner-02.png"
            alt="Deep-Eye-logo"
            border="0"
          />

          <div
            ref={bannerEyeRef}
            className={tema === "dark" ? "banner-eye-dark animate__animated" : "banner-eye-light animate__animated"}
            onClick={handleClickBannerEye}
            style={
              innerWidth > 1000
                ? {
                    transform: `translate(${limitedX}%, ${limitedY}%)`,
                    transition: "transform .1s ease-out",
                  }
                : {
                    transform: `translate(${limitedX}%, ${-limitedY}%)`,
                    transition: "transform .1s ease-out",
                  }
            }
          ></div>
        </div>

        <div className={tema === "dark" ? "title-banner-dark" : "title-banner-light"}>
          <h1></h1>
        </div>
      </section>
    </div>
  );
};

export default Banner; */

import React, { useState, useEffect, useRef } from "react";
import "animate.css";

const Banner = ({ tema }) => {
  const sensitivity =
    window.innerWidth > 1000 ? { x: 10, y: 10 } : { x: 50, y: 50 };

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bannerEyeRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: event.gamma * 50,
      y: (event.beta - 20) * 50,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, []);

  let x = 0;
  let y = 0;
  let limitedX = 0;
  let limitedY = 0;
  x = (position.x - window.innerWidth / 2) / sensitivity.x;
  y = (position.y - window.innerHeight / 2) / sensitivity.y;
  limitedX = Math.min(Math.max(x, -25), 25);
  limitedY = Math.min(Math.max(y, -25), 25);

  const handleClickBannerEye = () => {
    setShouldAnimate(true);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 1000);
  };

  return (
    <div>
      <section className="banner-container ">
        <div className={tema === "dark" ? "banner-dark" : "banner-light"}>
          <img
            src="https://s3.amazonaws.com/skybar.database.teset.1/imgBanner-02.png"
            alt="Deep-Eye-logo"
            border="0"
          />

          <div
            ref={bannerEyeRef}
            className={
              tema === "dark"
                ? shouldAnimate
                  ? "banner-eye-dark animate__animated animate__rubberBand"
                  : "banner-eye-dark animate__animated"
                : shouldAnimate
                ? "banner-eye-light animate__animated animate__rubberBand"
                : "banner-eye-light animate__animated"
            }
            onClick={handleClickBannerEye}
            style={
              innerWidth > 1000
                ? {
                    transform: `translate(${limitedX}%, ${limitedY}%)`,
                    transition: "transform .1s ease-out",
                  }
                : {
                    transform: `translate(${limitedX}%, ${-limitedY}%)`,
                    transition: "transform .1s ease-out",
                  }
            }
          ></div>
          
        </div>

        <div className={tema === "dark" ? "title-banner-dark" : "title-banner-light"}>
          <h1></h1>
        </div>
      </section>
    </div>
  );
};

export default Banner;




