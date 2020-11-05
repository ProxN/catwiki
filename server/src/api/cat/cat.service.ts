import axios from 'axios';
import catModel from './cat.model';
import { ICat, IBreeds, IBreed, IBreedImage, ICatSchema } from './interface';

const API_URL = 'https://api.thecatapi.com/v1/';
const headers = {
  'x-api-key': 'b4a6b15d-79e7-423c-8834-f4e984037785',
};

export const searchBreeds = async (name: string): Promise<ICat[]> => {
  const url = `${API_URL}breeds/search?q=${name}`;
  const res = await axios.get(url, {
    headers,
  });

  return res.data as ICat[];
};

export const getBreeds = async (): Promise<IBreeds[]> => {
  const url = `${API_URL}breeds`;

  const res = await axios.get<ICat[]>(url, {
    headers,
  });

  const breeds = res.data.map(({ id, name }) => ({ id, name }));

  return breeds as IBreeds[];
};

export const trackBreed = async (breedBody: IBreed): Promise<void> => {
  const { breedId } = breedBody;
  const breed = await catModel.findOne({ breedId: breedId });
  if (breed) {
    breed.searchCount = breed?.searchCount + 1;
    await breed?.save();
  } else {
    const url = `${API_URL}images/search?breed_id=${breedId}`;
    const res = await axios.get<IBreedImage[]>(url);
    if (res) {
      const data = res.data[0];
      await catModel.create({
        breedId: data.breeds[0].id,
        name: data.breeds[0].name,
        imageId: data.id,
        imageUrl: data.url,
        searchCount: 1,
      });
    }
  }
};

export const topCatBreed = async (): Promise<ICatSchema[]> => {
  const topBreeds = await catModel.find().sort({ searchCount: 1 }).limit(10);
  return topBreeds;
};

export const getBreedImages = async (breedId: string): Promise<string[]> => {
  const url = `${API_URL}images/search?breed_id=${breedId}`;
  const res = await axios.get<IBreedImage[]>(url, { headers });
  const images = res.data.map((el) => el.url);
  return images;
};
