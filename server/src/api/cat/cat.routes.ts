import { Router } from 'express';
import { searchByBreed, getBreeds } from './cat.controller';

const router = Router();

router.route('/search/:name').get(searchByBreed);

router.route('/').get(getBreeds);

export default router;
