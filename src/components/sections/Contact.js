import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Contact = () => (
  <Section id="contact">
    <StyledContainer>
      <div>
        <h2>Contact</h2>
        <p>
          If you are interested in working with us then please get in touch
          using the form below. Please tell us a bit about your project and we
          will be in touch. You can also call Paul on 07738 787478.
        </p>
      </div>
      <ContactForm
        method="POST"
        name="contact-form"
        data-netlify="true"
        action="/thank-you"
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="field">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            id="contact_number"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Tell us about your project</label>
          <textarea name="message" id="message" rows="6" required></textarea>
        </div>
        <input type="hidden" name="form-name" value="contact-form" />

        <input type="submit" value="Submit" className="btn" />

        <input type="reset" value="Clear" className="btn" />
      </ContactForm>
    </StyledContainer>
  </Section>
);

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
  h2 {
    padding-bottom: 2rem;
  }
`;

const ContactForm = styled.form`
  width: 75%;
  margin: 2rem;
  font-size: 1.5rem;
  font-family: inherit;

  input,
  select,
  textarea {
    background-color: ${props => props.theme.color.white.dark};
    border: 2px solid ${props => props.theme.color.black.light};
    border-radius: 5px;
    line-height: 2.5rem;
    width: 100%;
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border: 2px solid ${props => props.theme.color.secondary};
    }
  }
  .btn {
    width: 40%;
    margin-top: 1rem;
    margin-right: 1rem;
    height: 2.5rem;
    text-align: center
    &:hover {
      color: white;
      background-color: ${props => props.theme.color.primary};
      border: 2px solid ${props => props.theme.color.black.lighter};
    }
    padding: 0 1 rem;
  }

  label {
    margin: 0.8rem 0;
    display: inline-block;
  }
`;

export default Contact;
