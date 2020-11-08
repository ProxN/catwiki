import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { GlobalStyles } from '../../styles';
import Footer from './Footer';

const LayoutContainer = styled.div`
  height: 100%;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
