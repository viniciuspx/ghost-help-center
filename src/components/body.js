import React from "react";
import ContentBlock from "./content-block";
import Input from "./input";

import "./body.css";

import imgChart from "../images/chart.png";
import imgHelp from "../images/help.png";
import imgCheese from "../images/cheese.png";
import imgLeaf from "../images/leaf.png";
import imgPodcast from "../images/podcast.png";
import imgQR from "../images/qr.png";

const DUMMY_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function Body() {
  return (
    <div className="main-body">
      <div className="input-query">
        <h1>How can we help?</h1>
        <Input />
      </div>
      <div className="container">
        <ContentBlock
          img={imgChart}
          title="Charts Explained"
          bottomText={DUMMY_TEXT}
        />
        <ContentBlock
          img={imgHelp}
          title="Help Center Main"
          bottomText={DUMMY_TEXT}
        />
        <ContentBlock
          img={imgLeaf}
          title="Leaf Encounters"
          bottomText={DUMMY_TEXT}
        />
        <ContentBlock
          img={imgCheese}
          title="Stinky Cheese?"
          bottomText={DUMMY_TEXT}
        />
        <ContentBlock
          img={imgPodcast}
          title="Podcast about nothing"
          bottomText={DUMMY_TEXT}
        />
        <ContentBlock
          img={imgQR}
          title="How QR codes work"
          bottomText={DUMMY_TEXT}
        />
      </div>
    </div>
  );
}

export default Body;
