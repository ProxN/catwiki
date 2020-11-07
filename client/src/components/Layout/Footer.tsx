import React from 'react';
import styled from 'styled-components';
import { Media } from '../../styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Container from '../Container';

const FooterContainer = styled.footer`
  height: 8rem;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  background: #000;
  border-top-right-radius: 42px;
  border-top-left-radius: 42px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  ${Media.thone} {
    padding: 0 3rem;
  }

  ${Media.phablet} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const FooterLogo = styled.a`
  cursor: pointer;
  color: #fff;
  svg path {
    fill: currentColor;
  }
`;

const FooterParagraph = styled.p`
  color: #fff;
  span {
    margin-right: 1rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <FooterParagraph>
            <span>©</span>
            ProxN - devchallenge.io 2020
          </FooterParagraph>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
