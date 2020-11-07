import styled, { css } from 'styled-components';
import { Media } from '../../../../styles';

export const InfoSection = styled.section`
  padding: 10rem 2rem;
`;

export const InfoContent = styled.div`
  padding: 0 10.6rem;
  display: flex;
  align-items: center;
  ${Media.desktop} {
    flex-direction: column;
  }

  ${Media.tablet} {
    padding: 0;
    align-items: flex-start;
  }
`;

export const InfoHeading = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size: ${theme.fontSizes[6]}px;
  `};
  max-width: 53.6rem;
  line-height: 1.3;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    width: 6.4rem;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 80px;
  }

  ${Media.thone} {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`;

export const InfoImages = styled.div`
  display: flex;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2.7rem;
  }

  ${Media.desktop} {
    margin-top: 2rem;
  }

  ${Media.thone} {
    margin-left: auto;
    margin-right: auto;

    div:nth-child(1) {
      margin-right: 1.3rem;
    }

    img {
      width: 15rem;
      height: 24.2rem;
    }
    div img:nth-child(1) {
      width: 17.4rem;
      height: 10.5rem;
    }
    div img:nth-child(2) {
      height: 18.4rem;
      width: 12.2rem;
    }
  }
`;

export const Image = styled.img<{ width?: string; height?: string }>`
  ${({ width, height }) => css`
    height: ${height || '100%'};
    max-width: ${width || '100%'};
  `};

  :nth-child(1) {
    margin-bottom: 2.6rem;
  }
`;

export const InfoParagraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  max-width: 45rem;
  margin-top: 4.2rem;
`;

export const ReedMore = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size: ${theme.fontSizes[3]};
  `};
  text-transform: uppercase;
  opacity: 0.6;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: opacity 150ms ease-in-out;
  margin-top: 2.4rem;
  :hover {
    opacity: 1;
  }
  svg {
    width: 1.8rem;
    margin-left: 0.8rem;
  }
`;
