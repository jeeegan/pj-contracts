import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

const Footer = () => (
  <React.Fragment>
    <FooterWrapper>
      <StyledContainer>
        <Copyright>
          <h4>&copy; 2021 PJ Contracts</h4>
        </Copyright>
      </StyledContainer>
    </FooterWrapper>
  </React.Fragment>
);

const FooterWrapper = styled.footer`
  background-image: linear-gradient(
    ${props => props.theme.color.primary},
    ${props => props.theme.color.secondary}
  );
  background-size: cover;
  position: relative;
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
