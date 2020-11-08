import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Media } from '../../../../styles';
import Image from '../../../../assets/HeroImagelg.png';
import ImageMD from '../../../../assets/HeroImagemd.png';
import ImageSM from '../../../../assets/HeroImagesm.png';

export const BannerContainer = styled.div`
  background-image: url(${Image});
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  ${Media.desktop} {
    background-image: url(${ImageMD});
  }
  ${Media.thone} {
    background-image: url(${ImageSM});
    background-position: 75%;
  }
`;

export const BannerContent = styled.div`
  padding: 12.6rem 10.5rem;
  ${Media.desktop} {
    padding: 6.6rem 5.5rem;
  }
  ${Media.tablet} {
    padding: 3.6rem 2.5rem;
  }
`;

export const ImageLogo = styled.div`
  color: ${({ theme }) => theme.colors.textInverse.main};
  display: flex;
  justify-content: flex-start;
  svg {
    width: 24rem;
    height: 87px;
    ${Media.tablet} {
      width: 12rem;
      height: auto;
    }
  }
  svg path {
    fill: currentColor;
  }
`;

export const HeroLogo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[4]}px;
    color: ${theme.colors.textInverse.main};
  `};
  max-width: 37rem;
  margin-top: 1.1rem;

  ${Media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    max-width: 30rem;
  }
  ${Media.thone} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    max-width: 18rem;
  }
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.primary.main};
  width: 4rem;
  height: 4rem;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  background: rgba(151, 151, 151, 0.1);
  display: none;
`;

export const SearchForm = styled.div<{ focused?: boolean }>`
  margin-top: 5.2rem;
  width: 39rem;
  position: relative;
  ${Media.desktop} {
    width: 30rem;
  }
  ${Media.tablet} {
    width: 25rem;
  }
  ${Media.thone} {
    width: 13rem;
    ${({ focused }) =>
      focused &&
      css`
        position: fixed;
        top: 0;
        margin: 0;
        left: 0;
        background: #fff;
        z-index: 999;
        width: 100%;
        padding: 1.6rem 2rem;
        box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.2);
        ${CloseButton} {
          display: flex;
        }
      `};
  }
`;

export const Discover = styled.div`
  background: ${({ theme }) => theme.colors.bgInverse};
  padding: 4.6rem 10.5rem;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};

  ${Media.tablet} {
    padding: 2rem 3rem;
  }
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[3]}px;
    font-weight: ${theme.fontWeights[1]};
  `};
  padding-bottom: 0.8rem;
  position: relative;
  margin-bottom: 4rem;
  text-transform: capitalize;
  display: inline-block;
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 6rem;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 80px;
  }

  ${Media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
  }
  ${Media.phablet} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  }
`;

export const DiscoverGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4.2rem;
  ${Media.thone} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.2rem;
  }
`;

export const SeeMore = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size: ${theme.fontSizes[3]}px;
    color: ${theme.colors.primary.main};
  `};
  text-transform: uppercase;
  opacity: 0.6;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: opacity 150ms ease-in-out;
  :hover {
    opacity: 1;
  }
  svg {
    width: 1.8rem;
    margin-left: 0.8rem;
  }

  ${Media.thone} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    margin-top: 1rem;
  }
`;

export const DiscoverHeading = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size: ${theme.fontSizes[6]}px;
  `};
  max-width: 53.6rem;
  line-height: 1.3;
  ${Media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
    max-width: 43rem;
  }
  ${Media.thone} {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    max-width: 30rem;
  }
  ${Media.phablet} {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    max-width: 20rem;
  }
`;

export const PopularBreeds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, auto));
  grid-gap: 5rem;

  ${Media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
    grid-gap: 3rem;
  }
  ${Media.thone} {
    grid-template-columns: repeat(2, minmax(13.5rem, auto));
  }
  ${Media.phone} {
    grid-template-columns: repeat(1, minmax(13.5rem, auto));
  }
`;

export const BreedCard = styled.div`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.primary.main};

  :nth-child(1)::before {
    content: '';
    position: absolute;
    background: #dec68b;
    border-radius: 1.4rem;
    left: -1.3rem;
    top: 3.2rem;
    height: 17.4rem;
    width: 4.6rem;

    ${Media.thone} {
      height: 10.5rem;
      top: 1.4rem;
      left: -0.5rem;
    }
  }

  img {
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 100%;
    height: 22rem;
    object-fit: cover;
    position: relative;
    ${Media.thone} {
      height: 13.5rem;
    }
  }
`;

export const BreedName = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[2]};
    font-size: ${theme.fontSizes[2]}px;
  `};
  margin-top: 1.6rem;
  display: inline-block;
`;

export const BreedsSearchList = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
  top: 7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.6rem 1.2rem;
  max-height: 24rem;
  z-index: 99;
  overflow-y: auto;
  ${Media.thone} {
    position: relative;
    top: 0;
  }
`;

export const BreedItem = styled(Link)`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[2]};
    color: ${theme.colors.primary.main};
  `};
  display: block;
  padding: 1rem 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  :hover {
    background: rgba(151, 151, 151, 0.2);
  }
`;
