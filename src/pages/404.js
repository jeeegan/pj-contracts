import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Section id="404" accent style={{ padding: '500px auto' }}>
      <Container style={{ height: '70vh' }}>
        <h1>ERROR:404 PAGE NOT FOUND</h1>
        <p>Sorry this page doesn't exist</p>
        <br />
        <Link to="/" style={{ color: 'inherit' }}>
          Back to the homepage
        </Link>
      </Container>
    </Section>
    <Footer />
  </Layout>
);

export default NotFoundPage;
