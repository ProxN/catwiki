import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import config from '../../constants/config';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { TopBreed, TopBreedResponse } from '../types';
import { Media } from '../../styles';

const Heading = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size;${theme.fontSizes[4]}px;
  `};
  margin-bottom: 4.6rem;
`;

export const BreedItem = styled.div`
  display: flex;
  :not(:last-child) {
    margin-bottom: 5rem;
  }
  :last-child {
    margin-bottom: 10rem;
  }

  ${Media.thone} {
    flex-direction: column-reverse;
  }
`;

export const BreedImage = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  object-fit: cover;
`;

export const BreedInfo = styled.div`
  margin-left: 6rem;
  ${Media.thone} {
    margin-left: 0;
    margin-bottom: 2rem;
  }
`;

export const BreedName = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[3]}px;
    font-weight: ${theme.fontWeights[2]};
  `};
`;

export const BreedDescription = styled.p`
  margin-top: 2rem;
  max-width: 80rem;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
`;

const TopBreeds: React.FC = () => {
  const [breeds, setBreeds] = useState<TopBreed[]>([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      const url = `${config.API_URL}breeds/top?limit=10`;
      const { data } = await axios.get<TopBreedResponse>(url);
      if (data.data) {
        setBreeds(data.data);
        setIsloading(false);
      }
    };
    onLoad();
  }, []);

  return (
    <main style={{ padding: '0 2rem', minHeight: '100%' }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Heading>Top 10 most searched breeds</Heading>

          {breeds.length > 0 &&
            breeds.map((el, i) => (
              <BreedItem key={el._id}>
                <BreedImage src={el.imageUrl} alt={el.name} />
                <BreedInfo>
                  <BreedName>{`${i + 1}. ${el.name}`}</BreedName>
                  <BreedDescription>{el.description}</BreedDescription>
                </BreedInfo>
              </BreedItem>
            ))}
        </Container>
      )}
    </main>
  );
};

export default TopBreeds;
