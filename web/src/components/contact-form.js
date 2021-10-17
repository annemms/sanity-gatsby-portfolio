import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background: #3a3a3bc9;
  padding: 2em;
  margin: 0 auto;
`;

const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;

  h2 {
    font-size: 52px;
    color: white;
    text-align: center;
    margin-bottom: 120px;
  }
  input {
    padding: 10px;
    width: 300px;
    outline: none;
    font-weight: 400;
    font-size: 20px;
  }
  textarea {
    width: 100%;
  }
  p {
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }

  button {
    border: 4px solid white;
    border-radius: 40px;
    width: 120px;
    margin: 20px auto;
    padding: 8px 10px;
    background: none;
    color: white;
    display: block;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: block;
  }
`;

const ContactForm = () => (
  <FormWrapper>
    <Form method="post" action="#">
      <h2>Kontakt meg</h2>
      <SectionWrapper>
        <div>
          <label>
            <p>Fornavn</p>
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div>
          <label>
            <p>Etternavn</p>
            <input type="text" name="name" id="name" />
          </label>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div>
          <label>
            <p>E-post</p>
            <input type="email" name="email" id="email" />
          </label>
        </div>
        <div>
          <label>
            <p>Telefon</p>
            <input type="text" name="subject" id="subject" />
          </label>
        </div>
      </SectionWrapper>
      <div>
        <label>
          <p>Melding</p>
          <textarea name="message" id="message" rows="5" />
        </label>
      </div>
      <button type="submit">Send</button>
    </Form>
  </FormWrapper>
);

export default ContactForm;
