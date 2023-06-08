import React from "react";

import TypewriterText from "../typewriterText/typewriterText";
import { HeaderContainer, Heading } from "./style";

function Header() {
  return (
    <HeaderContainer>
      <TypewriterText delay="0.5">Hello there!</TypewriterText>
    </HeaderContainer>
  );
}

export default Header;
