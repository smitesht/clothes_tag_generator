import React from "react";

import {
  Banner,
  NavigationBarContainer,
  NavbarLinkWrapper,
  NavLinkExt,
} from "./NavigationBar.style";

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Banner>
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_transperent.png"}
            alt="smarttag.ai"
            width="18%"
          />
        </a>
      </Banner>
      <NavbarLinkWrapper>
        <NavLinkExt to="/">Home</NavLinkExt>
        <NavLinkExt to="/about">About Us</NavLinkExt>
        <NavLinkExt to="/contact">Contact Us</NavLinkExt>
      </NavbarLinkWrapper>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
