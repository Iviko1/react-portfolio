import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ProjectsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 3.125rem;

  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProjectsLink = styled.a`
  text-decoration: none;
  position: relative;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: "View Project";
    font-size: 1.5rem;
    position: absolute;
    color: #01bf71;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transform: scaleX(0);
    transition: transform 150ms ease-in-out;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const ProjectsCard = styled.div`
  background: #f9f9f9;
  color: #232323;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.625rem;
  max-height: 340px;
  padding: 1.875rem;
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 990px) {
    height: 100px;
    width: 100px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;
