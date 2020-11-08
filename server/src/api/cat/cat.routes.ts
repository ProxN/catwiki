import { Router } from 'express';
import { searchByBreed, getBreeds, topBreeds } from './cat.controller';

const router = Router();

router.route('/search/:name').get(searchByBreed);

router.route('/top').get(topBreeds);
router.route('/').get(getBreeds);

export default router;
