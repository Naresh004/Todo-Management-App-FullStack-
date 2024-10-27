# Todo-Management-App-FullStack-
This is a full-stack Todo Management application built with Spring Boot for the backend and React for the frontend. It allows users to manage their todos with features like authentication, CRUD operations, and more.

# Todo Management App

This is a full-stack Todo Management application built with Spring Boot for the backend and React for the frontend. It allows users to manage their todos with features like authentication, CRUD operations, and more.

## Features

- User authentication (JWT-based)
- Create, Read, Update, and Delete todos
- RESTful API
- React-based frontend with routing
- Spring Boot backend with JPA for data persistence

## Technologies Used

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- H2 Database (can be easily switched to other databases)

### Frontend
- React
- React Router
- Axios for API calls
- Formik for form handling
- Bootstrap for styling

## Getting Started

### Prerequisites
- Java JDK 11 or later
- Node.js and npm
- Maven

### Running the Backend
1. Navigate to the backend directory
2. Run `mvn spring-boot:run`
3. The server will start on `http://localhost:8080`

### Running the Frontend
1. Navigate to the frontend directory
2. Run `npm install` to install dependencies
3. Run `npm start`
4. The application will open in your default browser at `http://localhost:3000`

## API Endpoints

- `POST /authenticate`: Authenticate user and get JWT token
- `GET /users/{username}/todos`: Get all todos for a user
- `POST /users/{username}/todos`: Create a new todo
- `GET /users/{username}/todos/{id}`: Get a specific todo
- `PUT /users/{username}/todos/{id}`: Update a todo
- `DELETE /users/{username}/todos/{id}`: Delete a todo

