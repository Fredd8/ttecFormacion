# 🚀 Proyecto Docker - App + MongoDB

Este proyecto levanta una aplicación Node.js junto con una base de datos MongoDB usando Docker y Docker Compose.

---

## 📦 Requisitos

- Docker instalado
- Docker Compose (o `docker compose` moderno)

Comprobar instalación:

```bash
docker --version
docker compose version
```

## 🏗️ Construir y levantar el proyecto

### 🔨 Construir las imágenes

`docker compose build`

### ▶️ Levantar los contenedores

`docker compose up`

Con reconstrucción forzada:

`docker compose up --build`

En segundo plano:

`docker compose up -d`

## 🛑 Detener el proyecto

`docker compose down`

Eliminar también los volúmenes:

`docker compose down -v`

## 🔎 Comandos básicos de Docker

### 📋 Ver contenedores en ejecución

`docker ps`

Ver todos (incluidos detenidos):

`docker ps -a`

### 📦 Ver imágenes

`docker images`

### 📂 Ver volúmenes

`docker volume ls`

### 🌐 Ver redes

`docker network ls`

## 🧪 Inspección y depuración

### 📜 Ver logs

Todos los servicios:

`docker compose logs`

Solo la app:

`docker compose logs app`

En tiempo real:

`docker compose logs -f`

### 🖥️ Entrar dentro de un contenedor

`docker exec -it nombre_contenedor sh`

Ejemplo:

`docker exec -it proyecto-app-1 sh`

### 🔍 Inspeccionar un contenedor

`docker inspect nombre_contenedor`

### 🧹 Limpieza

Eliminar contenedores detenidos:

`docker container prune`

Eliminar imágenes no usadas:

`docker image prune`

Eliminar todo lo que no se esté usando:

`docker system prune`

⚠️ Cuidado: esto elimina recursos no utilizados.

## 📡 Acceso a la aplicación

Una vez levantado el proyecto:

- App: <http://localhost:3000>
- MongoDB: localhost:27017

## 🧠 Flujo típico de trabajo

```bash
docker compose up -d
docker compose logs -f
docker compose down
```

## 📌 Notas

- El servicio app depende de mongo.
- Los datos de MongoDB se guardan en un volumen persistente.
- El código está montado como volumen para desarrollo.

## 🐳 Resumen rápido de comandos más usados

| Acción | Comando |
| ------ | ------- |
| Construir | docker compose build |
| Levantar | docker compose up -d |
| Parar | docker compose down |
| Ver logs | docker compose logs -f |
| Ver contenedores | docker ps |

---

_✨ Proyecto listo para desarrollo con Docker._
