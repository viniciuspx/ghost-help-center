import React, { useState, useEffect } from "react";
import Image from "./img";
import Button from "./button";

import ghost from "../images/ghost-1.png";
import ghostFull from "../images/ghost-2.png";
import "./header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <header>
      <div className="header-text">
        <Image path={ghost} alt="ghost" mouseOver={ghostFull} />
        <h3> Ghost | Help Center</h3>
      </div>
      {!isMobile && (
        <div className="header-buttons">
          <Button text="Submit a question" class="header" />
          <Button text="Sign in" class="sign-in" />
        </div>
      )}
    </header>
  );
}

export default Header;
