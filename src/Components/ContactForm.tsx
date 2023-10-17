import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { rootTypes, store } from "../Context/Store";
import { AlertContainer, FormBtn, FormBtnContainer, FormContainer, FormInputContainer, FormLargeText, FormSmallText, InputNameAndEmail, MessageArea } from "../Styled-Components/StyledForm";
import AlertFunc from "./Alert";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");

  const { setAlerts } = useContext(store) as rootTypes;

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!name || !email || !textArea) {
      setAlerts(1);
      return;
    }

    emailjs
      .sendForm(
        "service_rgn7s5i",
        "template_0g0g1tn",
        form.current,
        "-ZnbGvR8ajEBXZJqc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setTextArea("");
          setAlerts(2);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <AlertContainer>
        <AlertFunc />
      </AlertContainer>
      <FormLargeText>Contact Form</FormLargeText>
      <FormSmallText>
        Please fill out the form below to discus any work opportunities.
      </FormSmallText>
      <FormInputContainer>
        <InputNameAndEmail
          value={name}
          onChange={(e) => {
            const regex = /^[A-Za-z آ-ی]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setName(e.target.value);
            }
          }}
          type="text"
          name="user_name"
          placeholder="Name or Company Name"
        />
        <InputNameAndEmail
          value={email}
          onChange={(e) => {
            const regex = /^[A-Za-z @.]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setEmail(e.target.value);
            }
          }}
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <MessageArea
          value={textArea}
          onChange={(e) => {
            const regex = /^[A-Za-z0-9 آ-ی]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setTextArea(e.target.value);
            }
          }}
          name="message"
          rows={6}
          placeholder="Message"
        />
      </FormInputContainer>
      <FormBtnContainer>
        <FormBtn type="submit" value="Send">
          Submit
        </FormBtn>
      </FormBtnContainer>
    </FormContainer>
  );
}
