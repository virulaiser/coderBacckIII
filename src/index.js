import express from 'express';
import mocksRouter from './routes/mocks.router.js'; // Ajusta la ruta si es diferente
import { errorHandler  } from './utils/errorHandling.js'; //Si tienes un manejador de errores

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api/mocks', mocksRouter);

// Ejemplo de manejo de errores global (si tienes un archivo errorHandler.js)
app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));