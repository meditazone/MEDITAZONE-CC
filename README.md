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
| GET | /quotes/author/{Author} | Retrieve Qoutes Data by Author |
| GET | /article | Retrieve All Article Data |
| GET | /article/category/{category} | Retrieve Article Data by Category |
| GET | /user/profile/allUsers | Retrieve All Users Data |
| GET | /user/profile/2 | Retrieve User Data by Id |
| PUT | /user/updateName/{id} | Update Name Data by Id |
| PUT | /user/editPhotoProfile/{id} | Update Photo Profile Data by Id |
