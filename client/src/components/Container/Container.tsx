import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  margin: 0 auto;
  max-width: 124.4rem;
  height: 100%;
`;

const Container: React.FC = (props) => {
  return <ContainerBox {...props} />;
};

export default Container;
