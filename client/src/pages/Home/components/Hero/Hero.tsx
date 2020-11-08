import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../../../constants/config';
import Container from '../../../../components/Container';
import Input from '../../../../components/Input';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import { ReactComponent as CloseSVG } from '../../../../assets/close.svg';
import { ReactComponent as Arrow } from '../../../../assets/arrow.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';
import { TopBreed, TopBreedResponse } from '../../../types';
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
  BreedsSearchList,
  BreedItem,
  CloseButton,
} from './Hero.styles';

interface Breed {
  id: string;
  name: string;
}

interface GetBreedResponse {
  status: string;
  data: Breed[];
}

const Hero: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [topBreeds, setTopBreeds] = useState<TopBreed[]>([]);
  const [searchBreeds, setSearchBreeds] = useState<Breed[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      const url = `${config.API_URL}breeds`;
      const { data } = await axios.get<GetBreedResponse>(url);
      if (data.data) {
        setBreeds(data.data);
      }
    };

    const getTopBreeds = async (): Promise<void> => {
      const url = `${config.API_URL}breeds/top?limit=4`;
      const { data } = await axios.get<TopBreedResponse>(url);
      if (data.data) {
        setTopBreeds(data.data);
      }
    };

    onLoad();
    getTopBreeds();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const filteredBreeds = breeds.filter((el) =>
        el.name.toLowerCase().includes(searchValue)
      );
      setSearchBreeds(filteredBreeds);
    }
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
    if (!e.target.value) {
      setSearchBreeds([]);
    }
  };

  const handleBlur = (): void => {
    setFocused(false);
    setSearchValue('');
  };
  const handleInputFocus = (): void => {
    setFocused(true);
  };

  return (
    <section>
      <Container>
        <BannerContainer>
          <BannerContent>
            <ImageLogo>
              <Logo />
            </ImageLogo>
            <HeroLogo>Get to know more about your cat breed</HeroLogo>
            <SearchForm focused={focused}>
              <CloseButton onClick={handleBlur}>
                <CloseSVG />
              </CloseButton>
              <Input
                onBlur={handleBlur}
                onFocus={handleInputFocus}
                onChange={handleChange}
                value={searchValue}
                icon={<SearchIcon />}
                rounded
                fullWidth
                placeholder='Enter your breed'
              />
              {searchBreeds.length > 0 && (
                <BreedsSearchList>
                  {searchBreeds.map((el) => (
                    <BreedItem
                      to={{ pathname: `/breeds/${el.name}`, state: el.id }}
                      key={el.id}
                    >
                      {el.name}
                    </BreedItem>
                  ))}
                </BreedsSearchList>
              )}
            </SearchForm>
          </BannerContent>
        </BannerContainer>
        <Discover>
          <Title>Most searched breeds</Title>
          <DiscoverGroup>
            <DiscoverHeading>67+ Breeds For you to discover</DiscoverHeading>
            <SeeMore as={Link} to='/breeds/top'>
              See more
              <Arrow />
            </SeeMore>
          </DiscoverGroup>
          <PopularBreeds>
            {topBreeds.length > 0 &&
              topBreeds.map((el) => (
                <BreedCard as={Link} to={`/breeds/${el.name}`}>
                  <img src={el.imageUrl} alt={el.name} />
                  <BreedName>{el.name}</BreedName>
                </BreedCard>
              ))}
          </PopularBreeds>
        </Discover>
      </Container>
    </section>
  );
};

export default Hero;
