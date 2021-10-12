import React, { useState } from "react";

import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ContactBtnLink,
  ArrowForward,
  ArrowRight,
  Img,
  ImgWrap,
} from "./ContactSection.styles";

const ContactSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ContactContainer lightBg={lightBg} id={id}>
      <ContactWrapper>
        <ContactRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <ContactBtnLink
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  to="/contact"
                >
                  {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                </ContactBtnLink>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
