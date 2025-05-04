Tarea a entregar : 

Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.

Mover el endpoint “/mockingpets” (Desarrollado en el primer Desafío Entregable) dentro de este router.

Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:

En “password” debe tener la contraseña “coder123” encriptada.

“role” puede variar entre “user” y “admin”.

“pets” debe ir como array vacío.

Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado “/mockingusers”, y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.

Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos “users” y “pets” para generar e insertar en la base de datos la cantidad de registros indicados.

Comprobar dichos registros insertados mediante los servicios GET de users y pets

Criterios

Creación del Router Mocks y Migración de Endpoints:

Se crea el router mocks.router.js bajo la ruta base /api/mocks y se migra con éxito el endpoint /mockingpets al nuevo router.

El router mocks.router.js se crea correctamente.

El endpoint /mockingpets se mueve al nuevo router sin errores en su funcionalidad.



Desarrollo del Módulo de Mocking para Generación de Usuarios:

Descripción: Se desarrolla un módulo de Mocking que genera usuarios según un parámetro numérico con las características especificadas.

Se genera correctamente un número específico de usuarios con contraseñas encriptadas, roles variados y arrays de pets vacíos.

Los usuarios generados cumplen con el formato esperado de una petición de Mongo.



Implementación de Endpoint GET para Generación de Usuarios:

Descripción: Se implementa un endpoint GET /mockingusers en el router mocks.router.js para generar usuarios según un parámetro numérico.

El endpoint GET /mockingusers utiliza el módulo de Mocking para generar y devolver la cantidad específica de usuarios solicitados.

Los usuarios generados siguen el formato esperado y son devueltos correctamente por el endpoint.



Desarrollo del Endpoint POST para Generar e Insertar Datos en la Base de Datos:

Descripción: Se desarrolla un endpoint POST /generateData en el router mocks.router.js para generar e insertar registros en la base de datos según parámetros numéricos.

El endpoint POST /generateData recibe correctamente los parámetros users y pets, genera la cantidad de registros indicada y los inserta en la base de datos.

Se comprueba la inserción de registros mediante los servicios GET de users y pets, asegurando que los registros generados estén disponibles y sean accesibles.


El trabajo a entregar usa tres end point:
basePath = '/api/mocks'

// Endpoint para obtener mascotas mock
get (/api/mocks/mockingpets)


// Endpoint GET /mockingusers
get (/api/mocks/mockingusers)


// Endpoint POST /generateData
post (/api/mocks/generateData )
body: {
  "users": 10,
  "pets": 5
}
------------------------
user.service.js y pet.service.js para que funcionan como  "base de datos"
