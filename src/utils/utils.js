import bcrypt from 'bcrypt';

export const createHash = (password) => {
    const salt = bcrypt.genSaltSync(10); // Número de rondas de sal
    return bcrypt.hashSync(password, salt);
};