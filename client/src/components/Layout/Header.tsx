import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import Container from '../Container';

const HeaderContainer = styled.header`
  height: 8.4rem;
  width: 100%;
  padding: 0 2rem;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const Logo = styled(Link)`
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Navbar>
          <Logo to='/'>
            <LogoSVG />
          </Logo>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
