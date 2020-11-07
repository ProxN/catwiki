import React from 'react';
import Container from '../../../../components/Container';
import Input from '../../../../components/Input';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { ReactComponent as Arrow } from '../../../../assets/arrow.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';

import {
  BannerContainer,
  BannerContent,
  ImageLogo,
  HeroLogo,
  SearchForm,
  Discover,
  Title,
  DiscoverHeading,
  BreedCard,
  PopularBreeds,
  DiscoverGroup,
  SeeMore,
  BreedName,
} from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <section>
      <Container>
        <BannerContainer>
          <BannerContent>
            <ImageLogo>
              <Logo />
            </ImageLogo>
            <HeroLogo>Get to know more about your cat breed</HeroLogo>
            <SearchForm>
              <Input
                icon={<SearchIcon />}
                rounded
                fullWidth
                placeholder='Enter your breed'
              />
            </SearchForm>
          </BannerContent>
        </BannerContainer>
        <Discover>
          <Title>Most searched breeds</Title>
          <DiscoverGroup>
            <DiscoverHeading>67+ Breeds For you to discover</DiscoverHeading>
            <SeeMore>
              See more
              <Arrow />
            </SeeMore>
          </DiscoverGroup>
          <PopularBreeds>
            <BreedCard>
              <img
                src='https://cdn2.thecatapi.com/images/JWOrjbhum.jpg'
                alt='British Longhair
'
              />
              <BreedName>British Longhair</BreedName>
            </BreedCard>
            <BreedCard>
              <img
                src='https://cdn2.thecatapi.com/images/JWOrjbhum.jpg'
                alt='British Longhair
'
              />
              <BreedName>British Longhair</BreedName>
            </BreedCard>
            <BreedCard>
              <img
                src='https://cdn2.thecatapi.com/images/JWOrjbhum.jpg'
                alt='British Longhair
'
              />
              <BreedName>British Longhair</BreedName>
            </BreedCard>
            <BreedCard>
              <img
                src='https://cdn2.thecatapi.com/images/JWOrjbhum.jpg'
                alt='British Longhair
'
              />
              <BreedName>British Longhair</BreedName>
            </BreedCard>
          </PopularBreeds>
        </Discover>
      </Container>
    </section>
  );
};

export default Hero;
