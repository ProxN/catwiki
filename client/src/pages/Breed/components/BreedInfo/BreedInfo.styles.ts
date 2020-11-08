import styled, { css } from 'styled-components';
import { Media } from '../../../../styles';

export const BreedInfoContainer = styled.div`
  padding: 0 2rem;
`;

export const BreedContent = styled.div`
  padding: 0 4rem;
  display: flex;
  ${Media.desktop} {
    padding: 0;
  }

  ${Media.tablet} {
    flex-direction: column;
  }
`;

export const BreedImage = styled.div`
  cursor: pointer;
  position: relative;
  height: 37rem;
  width: 37rem;
  margin-right: 11.5rem;

  :nth-child(1)::before {
    content: '';
    position: absolute;
    background: #dec68b;
    border-radius: 1.4rem;
    left: -1rem;
    top: 3.2rem;
    height: 30.5rem;
    width: 4.6rem;
    z-index: -1;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ${Media.tablet} {
    margin-bottom: 4rem;
  }
`;

export const BreedName = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[2]};
    font-size: ${theme.fontSizes[4]}px;
  `};
  margin-bottom: 2.5rem;
`;

export const BreedDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  max-width: 60rem;
  margin-bottom: 3.2rem;
`;

export const BreedStat = styled.p`
  margin-bottom: 2.4rem;
  span {
    font-weight: ${({ theme }) => theme.fontWeights[3]};
  }
`;

export const BreedSkil = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 2.2rem;
  }

  ${Media.phablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BreedScoreList = styled.div`
  display: flex;
  ${Media.phablet} {
    margin-top: 1rem;
  }
`;
export const BreedSkillScore = styled.span<{ active?: boolean }>`
  width: 6rem;
  height: 1.2rem;
  background: ${({ active }) => (active ? '#544439' : '#E0E0E0')};
  border-radius: 8px;
  :not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const Heading = styled(BreedName)`
  margin-bottom: 4rem;
`;

export const Photos = styled.div`
  padding: 0 4rem;
  margin-top: 6rem;
  ${Media.tablet} {
    padding: 0;
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(27.8rem, auto));
  grid-auto-rows: 27.8rem;
  grid-gap: 4rem;
  ${Media.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(27.8rem, auto));
  }
`;

export const BreedPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
