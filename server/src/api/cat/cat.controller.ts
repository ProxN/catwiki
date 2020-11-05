import { NextFunction, Request, Response } from 'express';
import * as catService from './cat.service';
import catchAsync from '../../utils/catchAsync';

export const searchByBreed = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await catService.searchBreeds(req.params.name);
    let breedRes = data[0] || {};
    if (data.length > 0 && breedRes) {
      const obj = {
        breedId: data[0].id,
        name: data[0].name,
      };
      await catService.trackBreed(obj);

      const images = await catService.getBreedImages(breedRes.id);

      breedRes = { ...breedRes, images };
    }
    res.status(200).json({
      message: 'success',
      data: breedRes,
    });
  }
);

export const getBreeds = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await catService.getBreeds();
    res.status(200).json({
      message: 'success',
      results: data.length,
      data: data,
    });
  }
);
