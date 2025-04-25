import { Router } from 'express';
import { generateUser, generatePet } from '../utils/mocks.utils.js';
import { createHash } from '../utils/utils.js'; // Asegúrate de tener esta función
import * as userService from '../services/user.service.js'; // Ajusta la ruta
import * as petService from '../services/pet.service.js';   // Ajusta la ruta
import { errorHandler } from '../utils/errorHandling.js'; // Manejo de errores asíncronos
import { StatusCodes } from 'http-status-codes'; // Para códigos de estado HTTP

const router = Router();
const basePath = '/api/mocks';

// Endpoint para obtener mascotas mock
router.get('/mockingpets', (req, res) => {
    const mockPets = Array.from({ length: 5 }, generatePet);
    res.status(StatusCodes.OK).json({
        status: 'success',
        payload: mockPets
    });
});

// Endpoint GET /mockingusers
router.get('/mockingusers', (req, res) => {
    const users = Array.from({ length: 50 }, generateUser);
    res.status(StatusCodes.OK).json({
        status: 'success',
        payload: users
    });
});

// Endpoint POST /generateData
router.post('/generateData', errorHandler(async (req, res) => {
    const { users: numUsers = 0, pets: numPets = 0 } = req.body; // Valores por defecto

    if (isNaN(numUsers) || isNaN(numPets) || numUsers < 0 || numPets < 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Los parámetros "users" y "pets" deben ser números no negativos.'
        });
    }

    try {
        const createdUsers = [];
        for (let i = 0; i < parseInt(numUsers, 10); i++) {
            const newUser = generateUser();
            const result = await userService.createUser(newUser);
            createdUsers.push(result);
        }

        const createdPets = [];
        for (let i = 0; i < parseInt(numPets, 10); i++) {
            const newPet = generatePet();
            const result = await petService.createPet(newPet);
            createdPets.push(result);
        }

        res.status(StatusCodes.CREATED).json({
            status: 'success',
            message: `Se generaron e insertaron ${createdUsers.length} usuarios y ${createdPets.length} mascotas.`,
            payload: { users: createdUsers, pets: createdPets }
        });
    } catch (error) {
        // El asyncHandler maneja el error, pero aquí podrías agregar logging
        console.error('Error en /generateData:', error);
        throw error; // Re-lanza el error para que asyncHandler lo capture
    }
}));

export default router;