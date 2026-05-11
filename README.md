# Examen 8 - CRUD de Cursos y Lecciones

Proyecto Express.js con MySQL para manejo de cursos y lecciones.

## Funcionalidades implementadas

- CRUD completo de `cursos`.
- CRUD completo de `lecciones`.
- Relación entre `lecciones.id_curso` y `cursos.id_curso`.
- Carga de imagen para cursos en creación y edición usando `multer`.
- Presentación de la categoría/curso asociado en la lista de lecciones.
- Validación básica de campos obligatorios en el backend.
- Configuración de puerto con `process.env.PORT` para despliegue en hosting.
- Configuración de conexión MySQL con variables de entorno para despliegue.

## Requisitos de la base de datos

Usar la base de datos `cursos_online`.

SQL recomendado para crear tablas:

```sql
CREATE DATABASE IF NOT EXISTS cursos_online;
USE cursos_online;

CREATE TABLE IF NOT EXISTS cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagen_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS lecciones (
    id_leccion INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    video_url VARCHAR(255),
    id_curso INT,
    FOREIGN KEY (id_curso)
      REFERENCES cursos(id_curso)
      ON DELETE CASCADE
);
```

Si ya tienes la tabla `cursos` creada sin la columna `imagen_url`, ejecuta:

```sql
ALTER TABLE cursos ADD COLUMN imagen_url VARCHAR(255);
```

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

O en producción:

```bash
npm start
```

## Variables de entorno opcionales

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `DB_PORT`
- `PORT`

## Observaciones

- El proyecto ya tiene el backend para subir imágenes de cursos.
- El servicio está listo para desplegarse en Render, Railway, Cyclic u otro host gratuito.
- Falta el despliegue real y la publicación del enlace funcional.
