import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const ContactContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  background: black;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const ContactWrapper = styled.div`
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

export const ContactCard = styled.div`
  background: #232323;
  color: #fff;
  color: #01bf71;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.625rem;
  max-height: 340px;
  padding: 1.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #fff;
  }
`;

export const ContactIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 990px) {
    height: 100px;
    width: 100px;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.625rem;
`;

export const ContactBtnWrap = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContactBtnLink = styled(LinkR)`
  border-radius: 3.125rem;
  background: #01bf71;
  white-space: nowrap;
  padding: 0.625rem 1.375rem;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  min-width: 7.8125rem;
  min-height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
