# TP 10 - API de Reservas

## Descripción

Este proyecto consiste en una aplicación de gestión de reservas de salas permite administrar reservas de estudiantes, consultar información, filtrar resultados y ordenarlos.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** framework para desarrollar el servidor y las rutas.
- **MongoDB:** base de datos NoSQL.
- **Mongoose:** ODM para modelar y consultar los datos de MongoDB.

## Instalación y ejecución

### 1. Clonar o descargar el proyecto

Abrir la carpeta del proyecto en Visual Studio Code.

### 2. Instalar dependencias

Ejecutar en la terminal:
npm install

### 3. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto y configurar la conexión a MongoDB:

MONGODB_URI=tu_url_de_conexion
PORT=3000


## Modelo de datos

La aplicación trabaja con reservas que contienen los siguientes campos:

| estudiante | Nombre del estudiante |
| email | Correo electrónico |
| sala | Sala reservada |
| fecha | Fecha de la reserva |
| turno | Turno seleccionado |
| personas | Cantidad de personas |
| estado | Estado de disponibilidad |

Cada reserva posee un identificador único generado por MongoDB.

## API REST

La API permite realizar operaciones CRUD sobre las reservas.

Ruta principal:
/api/reservas

| GET | `/api/reservas` | Listar reservas |
| GET | `/api/reservas/:id` | Obtener una reserva por ID |
| POST | `/api/reservas` | Crear una reserva |
| PUT | `/api/reservas/:id` | Reemplazar una reserva |
| PATCH | `/api/reservas/:id` | Actualizar parcialmente una reserva |
| DELETE | `/api/reservas/:id` | Eliminar una reserva |

## Consulta, filtros y ordenamiento

El listado de reservas admite los siguientes parámetros:

| sala | Filtra las reservas por sala |
| orden | Ordena los resultados |
| pagina | Indica la página solicitada |
| limite | Cantidad de resultados por página |

### Opciones de ordenamiento

- `personas-asc`: orden ascendente por cantidad de personas.
- `personas-desc`: orden descendente por cantidad de personas.

