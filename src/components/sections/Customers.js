import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as BBCLogo } from '@images/logos/bbc.svg';
import { ReactComponent as BonhamsLogo } from '@images/logos/bonhams.svg';
import { ReactComponent as BAELogo } from '@images/logos/bae.svg';
import { ReactComponent as JWLogo } from '@images/logos/jwcarpets.svg';
import { ReactComponent as WylieBissetLogo } from '@images/logos/wyliebisset.svg';
import { ReactComponent as LockedInLogo } from '@images/logos/lockedin.svg';

const LOGOS = [
  {
    logo: BBCLogo,
    link: 'https://www.bbc.co.uk/',
  },
  {
    logo: BonhamsLogo,
    link: 'https://www.bonhams.com/',
  },
  {
    logo: BAELogo,
    link: 'https://www.baesystems.com/',
  },
  {
    logo: JWLogo,
    link: 'https://www.jwcarpets.com/',
  },
  {
    logo: WylieBissetLogo,
    link: 'https://www.wyliebisset.com/',
  },
  {
    logo: LockedInLogo,
    link: 'https://escaperoomglasgow.com/',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <StyledSection id="customers" accent>
        <StyledContainer>
          <div>
            <h2>Who we work with</h2>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
        </StyledContainer>
      </StyledSection>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.primary};
  position: relative;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
