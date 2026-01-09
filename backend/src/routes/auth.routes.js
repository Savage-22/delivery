import {Router} from 'express';
import {login} from '../controllers/auth.controller.js';

const router = Router();

/**
 * AUTH ROUTES
 * Define los endpoints de la API de autenticación
 */

// POST - iniciar sesión
router.post('/login', login);

export default router;