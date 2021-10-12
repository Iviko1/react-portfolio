import about from "../../images/about.svg";
import contact from "../../images/contact.svg";

export const AboutObj = {
  id: "about",
  lightBg: 0,
  lightText: 1,
  topLine: "Experience",
  headLine: "Highly Motivated Student Looking For New Opportunities",
  description:
    "Currently with no job experience, I am widely looking for opportunities to broaden my coding skills and improve in general as a human being.",
  buttonLabel: "Projects",
  imgStart: 0,
  img: about,
  alt: "cat",
  dark: 1,
  primary: 1,
  darkText: 0,
  to: "projects",
};

export const ProjectObj = {
  id: "projects",
  buttonLabel: "Contact",
  dark: 0,
  primary: 0,
  to: "contact",
};

export const ContactObj = {
  id: "contact",
  buttonLabel: "Contact Me",
  dark: 1,
  primary: 1,
  lightText: 1,
  topLine: "Contact",
  headLine: "Feel Free To Contact Me Anytime",
  description:
    "I would greatly appreciate any type of offer whether it is freelancing, part-time or full-time.",
  to: "/contact",
  imgStart: 1,
  img: contact,
};
