import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background: #7990a1;
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
    min-width: 100%;
    max-width: 100%;
    font-family: "Raleway";
  }
  textarea {
    width: 100%;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
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

const ContactForm = () => {
  return (
    <FormWrapper id="contact">
      <Form
        method="post"
        action="https://www.flexyform.com/f/775f49998b81280972c5397758219bb463534882"
      >
        <h2>Kontakt meg</h2>
        <SectionWrapper>
          <div>
            <label>
              <p>Fornavn</p>
              <input type="firstname" name="firstname" id="firstname" required />
            </label>
          </div>
          <div>
            <label>
              <p>Etternavn</p>
              <input type="lastname" name="lastname" id="lastname" required />
            </label>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div>
            <label>
              <p>E-post</p>
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div>
            <label>
              <p>Telefon</p>
              <input type="phone" name="phone" id="phone" />
            </label>
          </div>
        </SectionWrapper>
        <div>
          <label>
            <p>Melding</p>
            <textarea name="message" id="message" rows="5" required />
          </label>
        </div>
        <button type="submit">Send</button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
