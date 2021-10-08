import React from "react";
import {
  Container,
  FormWrap,
  FormButton,
  Form,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  Icon,
  CloseIcon,
} from "./ContactPage.styles";

import { FaTimes } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">IveX</Icon>
          <CloseIcon to="/">
            <FaTimes />
          </CloseIcon>

          <FormContent>
            <Form action="#" autoComplete="off">
              <FormH1>Contact Me!</FormH1>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput type="email" name="email" id="email" required />
              <FormLabel htmlFor="text">Message</FormLabel>
              <FormInput type="text" name="text" id="text" required />
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactPage;
