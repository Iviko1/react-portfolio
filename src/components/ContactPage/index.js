import React, { useRef } from "react";
import emailjs from "emailjs-com";
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
  FormTextArea,
} from "./ContactPage.styles";

import { FaTimes } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_psq4dhl",
        "template_xb5bdcs",
        form.current,
        "user_9YZxmFLpLwWF0uCIJKMQY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error, Email Not Sent.");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">IveX</Icon>
          <CloseIcon to="/">
            <FaTimes />
          </CloseIcon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Contact Me!</FormH1>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput type="text" name="name" id="name" required />
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <FormInput type="email" name="email" id="email" required />
              <FormLabel htmlFor="text">Message</FormLabel>
              <FormTextArea name="text" id="text" required />
              <FormButton type="submit" value="Send">
                Send
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactPage;
