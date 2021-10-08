import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./Footer.styles";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              IveX
            </SocialLogo>
            <WebsiteRights>IveX &copy; 2021 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/iviko.kobakhidze/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/i.kobakhidze/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Iviko1"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/iveri02"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/iveri-kobakhidze-315551209/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
