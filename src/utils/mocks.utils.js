import { faker } from '@faker-js/faker';
import { createHash } from './utils.js'; // Asegúrate de tener esta función

export const generateUser = () => {
    const role = faker.helpers.arrayElement(['user', 'admin']);
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: createHash('coder123'),
        role: role,
        age: faker.number.int({ min: 18, max: 99 }),
        pets: []
    };
};

export const generatePet = () => {
    return {
        name: faker.animal.dog(),
        species: faker.animal.type(),
       
    };
};

