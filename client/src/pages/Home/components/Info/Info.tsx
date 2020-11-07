import React from 'react';
import Container from '../../../../components/Container';
import { ReactComponent as Arrow } from '../../../../assets/arrow.svg';
import Image1 from '../../../../assets/image2.png';
import Image2 from '../../../../assets/image1.png';
import Image3 from '../../../../assets/image3.png';
import {
  InfoSection,
  InfoContent,
  InfoHeading,
  InfoImages,
  InfoParagraph,
  ReedMore,
  Image,
} from './Info.styles';

const Info: React.FC = () => {
  return (
    <InfoSection>
      <Container>
        <InfoContent>
          <div>
            <InfoHeading>Why should you have a cat?</InfoHeading>
            <InfoParagraph>
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </InfoParagraph>
            <ReedMore>
              Read more
              <Arrow />
            </ReedMore>
          </div>
          <InfoImages>
            <div>
              <Image src={Image1} alt='image1' width='273px' />
              <Image src={Image2} alt='image3' height='293px' />
            </div>
            <Image src={Image3} alt='image3' height='385px' />
          </InfoImages>
        </InfoContent>
      </Container>
    </InfoSection>
  );
};

export default Info;
