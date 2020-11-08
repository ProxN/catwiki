export interface TopBreed {
  breedId: string;
  createdAt: string;
  name: string;
  searchCount: number;
  updatedAt: string;
  imageUrl: string;
  description: string;
  _id: string;
}

export interface TopBreedResponse {
  status: string;
  results: number;
  data: TopBreed[];
}
