import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button.styles";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsIcon,
  ProjectsLink,
  ProjectsWrapper,
  ArrowForward,
  ArrowRight,
} from "./ProjectsSection.styles";
import react from "../../images/react.svg";
import laravel from "../../images/laravel.svg";
import node from "../../images/node.svg";
import javascript from "../../images/javascript.svg";
import css from "../../images/css.svg";
import html from "../../images/html.svg";

const ProjectsSection = ({ id, buttonLabel, primary, dark, to }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <ProjectsContainer id={id}>
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsLink
            href="https://iviko1.github.io/js-star/"
            target="_blank"
          >
            <ProjectsCard>
              <ProjectsIcon src={html} />
              <ProjectsH2>Star</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
          <ProjectsLink href="#" target="_blank">
            <ProjectsCard>
              <ProjectsIcon src={css} />
              <ProjectsH2>CSS</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
          <ProjectsLink href="#" target="_blank">
            <ProjectsCard>
              <ProjectsIcon src={javascript} />
              <ProjectsH2>Javascript</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
          <ProjectsLink href="#" target="_blank">
            <ProjectsCard>
              <ProjectsIcon src={react} />
              <ProjectsH2>React</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
          <ProjectsLink href="#" target="_blank">
            <ProjectsCard>
              <ProjectsIcon src={laravel} />
              <ProjectsH2>Laravel</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
          <ProjectsLink href="#" target="_blank">
            <ProjectsCard>
              <ProjectsIcon src={node} />
              <ProjectsH2>Node</ProjectsH2>
            </ProjectsCard>
          </ProjectsLink>
        </ProjectsWrapper>
        <Button
          to={to}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          dark={dark}
          primary={primary}
        >
          {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
