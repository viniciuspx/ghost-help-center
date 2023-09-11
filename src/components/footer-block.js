import React from "react";

import "./footer-block.css";

function FooterBlock(props) {
  return !props.signature ? (
    <div className="footer-block">
      <h3>{props.title}</h3>
      {props.itens &&
        props.itens.map((item) => {
          return (
            <a href="http://www.google.com" key={item}>
              {item}
            </a>
          );
        })}
    </div>
  ) : (
    <div className="footer-block footer-signature">
      <h3>
        <strong>Ghost 2023</strong>
      </h3>
      <div className="signature">
        Site made as study case. Based on{" "}
        <a href="https://www.frontendpractice.com/projects/abstract">
          Abstract
        </a>
      </div>
    </div>
  );
}

export default FooterBlock;
