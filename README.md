# MEDITAZONE-APP SPEC-API

## Description
Welcome to the API documentation for the Meditazone-App. This API provides endpoints for user authentication, meditation data retrieval, quotes, and articles related to meditation and mindfulness.

## Request
| Method | Endpoint | Description |
| ------- | ------- | ------- |
| POST | /auth/signup | Register a new user |
| POST | /auth/signin | Authenticate and sign in a user |
| GET | /auth/user | Retrieve user information |
| GET | /auth/logout |  Log out the currently authenticated user |
| GET | /meditation | Retrieve All Meditation Data |
| Get | /meditation/{id} | Retrieve Meditation Data by Id |
| GET | /meditation/category/{category} | Retrieve Meditatioon Data by Category |
| GET | /quotes | Retrieve All Quotes Data |
| GET | /quotes/{id} | Retrieve Quotes Data by Id |
| GET | /article | Retrieve All Article Data |
