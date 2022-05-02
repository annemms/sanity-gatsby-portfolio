import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  message: yup.string().required()
});

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
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const $form = useRef(null);

  const onSubmitHandler = async (data, e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    const response = await fetch(
      "https://www.flexyform.com/f/775f49998b81280972c5397758219bb463534882",
      requestOptions
    );
    const jsonData = await response.json();

    console.log({ jsonData, data });

    /*


    console.log({ data, form });
    setTimeout(() => {
      reset();
    }, 1000);
    */
  };
  return (
    <FormWrapper id="contact" ref={$form}>
      <Form
        onSubmit={handleSubmit(onSubmitHandler)}
        method="post"
        action="https://www.flexyform.com/f/775f49998b81280972c5397758219bb463534882"
      >
        <h2>Kontakt meg</h2>
        <SectionWrapper>
          <div>
            <label>
              <p>Fornavn</p>
              <input {...register("firstname")} type="firstname" name="firstname" id="firstname" />
            </label>
            <p>{errors.firstname?.message}</p>
          </div>
          <div>
            <label>
              <p>Etternavn</p>
              <input {...register("lastname")} type="lastname" name="lastname" id="lastname" />
            </label>
            <p>{errors.lastname?.message}</p>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div>
            <label>
              <p>E-post</p>
              <input {...register("email")} type="email" name="email" id="email" />
            </label>
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label>
              <p>Telefon</p>
              <input {...register("phone")} type="phone" name="phone" id="phone" />
            </label>
          </div>
        </SectionWrapper>
        <div>
          <label>
            <p>Melding</p>
            <textarea {...register("message")} name="message" id="message" rows="5" />
          </label>
          <p>{errors.message?.message}</p>
        </div>
        <button type="submit">Send</button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
