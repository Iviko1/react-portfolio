import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 6.25rem 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 0.9375rem;
  padding: 0 0.9375rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 0.9375rem;
  padding: 0 0.9375rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 3.75rem;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 2.1875rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0.625rem 0;
  padding-right: 0;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;
