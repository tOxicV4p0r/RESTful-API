# API Endpoints
Here are the key API endpoints:

#### Base URL is `/v1`

## Authentication
- **POST `/auth/register`** : Register a new user.
- **PUT `/auth/change-password`** : Change the user's password.

## Profile
Required an authorized token in the request headers
```http
Authorization: Bearer faketoken_user1
```
- **GET `/users:id`** Get user profile by ID.
- **PUT `/users:id`** Update user profile by ID.
- **DELETE `/users:id`** Delete the user by ID.

## Project Structure (MVC)
```bash
project/
│
├── middlewares/          # Middleware functions
├── models/               # Data layer
├── routes/               # API endpoints
├── utils/                # Utility functions
├── app.js                # Main application
└── server.js             # Server configuration
```
