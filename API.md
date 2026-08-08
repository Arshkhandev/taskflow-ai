# TaskFlow AI API Documentation

Base URL

```
http://localhost:5000/api
```

---

# Authentication

## Register

POST /auth/register

Body

```json
{
  "name": "Arsh Khan",
  "email": "arsh@gmail.com",
  "password": "password123"
}
```

---

## Login

POST /auth/login

Body

```json
{
  "email": "arsh@gmail.com",
  "password": "password123"
}
```

---

## Get Current User

GET /auth/me

Authorization

```
Bearer <JWT_TOKEN>
```

---

# Boards

## Create Board

POST /boards

## Get Boards

GET /boards

## Get Board

GET /boards/:boardId

## Update Board

PUT /boards/:boardId

## Archive Board

PATCH /boards/:boardId/archive

## Delete Board

DELETE /boards/:boardId

---

# Tasks

## Create Task

POST /tasks

## Get Board Tasks

GET /tasks/board/:boardId

## Get Task

GET /tasks/:taskId

## Update Task

PUT /tasks/:taskId

## Archive Task

PATCH /tasks/:taskId/archive

## Delete Task

DELETE /tasks/:taskId

---

# AI

## Generate Tasks

POST /ai/generate-tasks

```json
{
  "goal": "Build an E-commerce Website"
}
```

---

## Generate & Create Tasks

POST /ai/generate-and-create-tasks

```json
{
  "boardId": "<BOARD_ID>",
  "goal": "Build an E-commerce Website"
}
```

---

## Break Down Task

POST /ai/break-down-task

```json
{
  "task": "Build Authentication System"
}
```

---

## Suggest Priority

POST /ai/suggest-priority

```json
{
  "title": "Build Authentication",
  "description": "Implement JWT authentication."
}
```

---

## Suggest Due Date

POST /ai/suggest-due-date

```json
{
  "title": "Build Authentication",
  "description": "Implement JWT authentication."
}
```

---

## Improve Description

POST /ai/improve-description

```json
{
  "title": "Build Authentication",
  "description": "Create auth."
}
```

---

# Authentication

All protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```