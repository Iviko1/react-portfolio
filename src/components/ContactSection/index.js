import React from "react";
import react from "../../images/react.svg";
import laravel from "../../images/laravel.svg";
import node from "../../images/node.svg";
import javascript from "../../images/javascript.svg";
import css from "../../images/css.svg";
import html from "../../images/html.svg";
import {
  ContactContainer,
  ContactH1,
  ContactH2,
  ContactWrapper,
  ContactCard,
  ContactIcon,
  ContactBtnWrap,
  ContactBtnLink,
} from "./ContactSection.styles";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactH1>Contact Me</ContactH1>
      <ContactWrapper>
        <ContactCard>
          <ContactIcon src={html} />
          <ContactH2>HTML</ContactH2>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={css} />
          <ContactH2>CSS</ContactH2>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={javascript} />
          <ContactH2>Javascript</ContactH2>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={react} />
          <ContactH2>React</ContactH2>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={laravel} />
          <ContactH2>Laravel</ContactH2>
        </ContactCard>
        <ContactCard>
          <ContactIcon src={node} />
          <ContactH2>Node</ContactH2>
        </ContactCard>
      </ContactWrapper>
      <ContactBtnWrap>
        <ContactBtnLink to="/contact">Contact</ContactBtnLink>
      </ContactBtnWrap>
    </ContactContainer>
  );
};

export default ContactSection;
