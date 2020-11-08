import axios from 'axios';
import catModel from './cat.model';
import { ICat, IBreeds, IBreed, IBreedImage, ICatSchema } from './interface';

const API_URL = 'https://api.thecatapi.com/v1/';
const headers = {
  'x-api-key': process.env.API_KEY || '',
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

export const trackBreed = async (
  breedBody: IBreed
): Promise<ICatSchema | null> => {
  const { breedId } = breedBody;
  const breed = await catModel.findOne({ breedId: breedId });
  if (breed) {
    breed.searchCount = breed.searchCount + 1;
    await breed.save();
    return breed;
  } else {
    const url = `${API_URL}images/search?breed_id=${breedId}`;
    const { data } = await axios.get<IBreedImage[]>(url);
    if (data.length > 0) {
      const { breeds, url, id } = data[0];
      const newBreed = await catModel.create({
        breedId: breeds[0].id,
        name: breeds[0].name,
        description: breeds[0].description,
        imageId: id,
        imageUrl: url,
        searchCount: 1,
      });
      return newBreed;
    }
  }
  return null;
};

export const topCatBreed = async (limit: number): Promise<ICatSchema[]> => {
  const breedLimit = +limit || 10;
  const topBreeds = await catModel
    .find()
    .sort({ searchCount: -1 })
    .limit(breedLimit);
  return topBreeds;
};

export const getBreedImages = async (breedId: string): Promise<string[]> => {
  const url = `${API_URL}images/search?breed_id=${breedId}&limit=8`;
  const res = await axios.get<IBreedImage[]>(url, { headers });
  const images = res.data.map((el) => el.url);
  return images;
};
