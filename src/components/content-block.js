import React, { useEffect, useState } from "react";
import Image from "./img";

import "./content-block.css";

function ContentBlock(props) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="content-block">
      {!isMobile && <Image path={props.img} alt={props.alt} />}
      <div className="content-block-text">
        <h3>{props.title}</h3>
        <p>{props.bottomText}</p>
        <a href="http://www.google.com.br">Learn More &#x2192;</a>
      </div>
    </div>
  );
}

export default ContentBlock;
