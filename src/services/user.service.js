// Ejemplo de servicio de usuario (ADAPTAR A TU BASE DE DATOS)
import { createHash } from '../utils/utils.js'; // Importa createHash si lo necesitas aquí

const users = []; // Simulación de una base de datos en memoria

export const createUser = async (userData) => {
    // Encriptar la contraseña ANTES de guardar en la base de datos
    const hashedPassword = createHash(userData.password);
    const newUser = { ...userData, password: hashedPassword, id: users.length + 1 }; // Simula un ID
    users.push(newUser);
    return newUser; // Devuelve el usuario creado (¡SIN la contraseña!)
};

export const getUserById = async (id) => {
  return users.find(user => user.id === id);
};