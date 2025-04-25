// Ejemplo de servicio de mascotas (ADAPTAR A TU BASE DE DATOS)
const pets = [];

export const createPet = async (petData) => {
    const newPet = { ...petData, id: pets.length + 1 }; // Simula un ID
    pets.push(newPet);
    return newPet;
};

export const getPetById = async (id) => {
    return pets.find(pet => pet.id === id);
};