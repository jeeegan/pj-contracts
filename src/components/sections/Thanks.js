import React from 'react';
import { Link } from 'gatsby';

import { Section, Container } from '@components/global';

const Thanks = () => (
  <Section id="thanks" accent style={{ padding: '500px auto' }}>
    <Container style={{ height: '70vh' }}>
      <h1>Thank you!</h1>
      <p>Thanks, we've received your message. We'll be in touch soon.</p>
      <br />
      <Link to="/" style={{ color: 'inherit' }}>
        Back to the homepage
      </Link>
    </Container>
  </Section>
);

export default Thanks;
