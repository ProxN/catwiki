import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import config from '../../constants/config';
import Loader from '../../components/Loader';
import BreedInfo from './components/BreedInfo/BreedInfo';
import { GetBreedResponse, IBreed } from './types';

const MainContainer = styled.main`
  padding: 5rem 0;
  min-height: 100%;
`;

const Breed: React.FC = () => {
  const [isLoading, setIsloading] = useState(true);
  const [breed, setBreed] = useState<IBreed | null>(null);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      const url = `${config.API_URL}breeds/search/${name}`;
      const { data } = await axios.get<GetBreedResponse>(url);

      setBreed(data.data);
      setIsloading(false);
    };
    onLoad();
  }, []);

  return (
    <MainContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <BreedInfo breed={breed} />
        </div>
      )}
    </MainContainer>
  );
};

export default Breed;
