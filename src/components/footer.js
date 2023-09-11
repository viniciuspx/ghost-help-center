import React from "react";

import "./footer.css";
import FooterBlock from "./footer-block";

function Footer() {
  return (
    <footer>
      <FooterBlock title={"Ghost"} itens={["Lorem", "Ipsum"]} />
      <FooterBlock
        title={"Resources"}
        itens={["Lorem", "Ipsum", "dolor", "sit", "amet"]}
      />
      <FooterBlock title={"Community"} itens={["Lorem", "Ipsum", "dolor"]} />
      <FooterBlock title={"Company"} itens={["sit", "amet"]} />
      <FooterBlock signature={true} />
    </footer>
  );
}

export default Footer;
