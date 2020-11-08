import React from 'react';
import LazyLoad from 'react-lazyload';
import Container from '../../../../components/Container';
import { IBreed } from '../../types';
import {
  BreedInfoContainer,
  BreedContent,
  BreedImage,
  BreedName,
  BreedDescription,
  BreedStat,
  BreedSkil,
  BreedSkillScore,
  BreedScoreList,
  Heading,
  Photos,
  BreedPhoto,
  PhotosGrid,
} from './BreedInfo.styles';

interface BreedInfoProps {
  breed: IBreed | null;
}

const show = {
  adaptability: 'Adaptability',
  affection_level: 'Affection level',
  child_friendly: 'Child Friendly',
  grooming: 'Grooming',
  health_issues: 'Health issues',
  intelligence: 'Intelligence',
  social_needs: 'Social needs',
  stranger_friendly: 'Stranger friendly',
};

const BreedInfo: React.FC<BreedInfoProps> = ({ breed }) => {
  if (!breed) return null;

  return (
    <BreedInfoContainer>
      <Container>
        <BreedContent>
          <BreedImage>
            <img src={breed.images[0]} alt={breed.name} />
          </BreedImage>
          <div>
            <BreedName>{breed.name}</BreedName>
            <BreedDescription>{breed.description}</BreedDescription>
            <BreedStat>
              <span>Temperament: </span>
              {breed.temperament}
            </BreedStat>
            <BreedStat>
              <span>Origin: </span>
              {breed.origin}
            </BreedStat>
            <BreedStat>
              <span>Life Span: </span>
              {breed.life_span}
            </BreedStat>
            {Object.keys(show).map((key) => (
              <BreedSkil>
                {`${show[key as keyof typeof show]}:`}
                <BreedScoreList>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <BreedSkillScore
                        active={
                          (breed[key as keyof typeof breed] as number) > i
                        }
                      />
                    ))}
                </BreedScoreList>
              </BreedSkil>
            ))}
          </div>
        </BreedContent>
        <Photos>
          <Heading>Other photos</Heading>
          <PhotosGrid>
            {breed.images.slice(1).map((el) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              // eslint-disable-next-line react/no-array-index-key
              <LazyLoad>
                <BreedPhoto
                  src={el}
                  alt={breed.name}
                  key={`image-${Math.random()}`}
                />
              </LazyLoad>
            ))}
          </PhotosGrid>
        </Photos>
      </Container>
    </BreedInfoContainer>
  );
};

export default BreedInfo;
