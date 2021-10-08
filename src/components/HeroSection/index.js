import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button/Button.styles";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSection.styles";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hello, I am <span>IveX</span>
        </HeroH1>
        <HeroP>
          19 Years Old Front-End Developer,
          <br /> Undergraduate From BTU
          <br />
          (Business And Technology University)
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
