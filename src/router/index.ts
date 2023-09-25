//Express
import { Router } from 'express';

//Import
import * as pageController from '../controllers/pageController';
const router = Router(); 

//Home
router.get('/',pageController.home);

// Exportando todos router
export default router; 

