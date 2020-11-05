import { Document } from 'mongoose';

export interface ICat {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  images: string[];
}

export interface IBreeds {
  id: string;
  name: string;
}

export interface IBreed {
  breedId: string;
  name: string;
}

export interface IBreedImage {
  breeds: ICat[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface ICatSchema extends IBreed, Document {
  searchCount: number;
  imageUrl: string;
  imageId: string;
}
