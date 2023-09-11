import React, { useState } from "react";

import "./img.css";

function Image(props) {
  const [over, setOver] = useState(false);
  return (
    <div
      onMouseOver={() => {
        props.mouseOver && setOver(true);
      }}
      onMouseOut={() => setOver(false)}
      className="img-d"
    >
      <img src={over ? props.mouseOver : props.path} alt={props.alt}></img>
    </div>
  );
}

export default Image;
