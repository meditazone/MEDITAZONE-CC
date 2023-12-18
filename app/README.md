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
| GET | v1/quotes | Retrieve All Quotes Data |
| GET | v1/quotes/{id} | Retrieve Quotes Data by Id |
| GET | v1/quotes/author/{Author} | Retrieve Qoutes Data by Author |
| GET | v2/article | Retrieve All Article Data |
| GET | v2/article/{id} | Retrieve Article Data by Id |
| GET | v2/article/category/{category} | Retrieve Article Data by Category |
| GET | v3/meditation | Retrieve All Meditation Data |
| Get | v3/meditation/{id} | Retrieve Meditation Data by Id |
| GET | v3/meditation/category/{category} | Retrieve Meditatioon Data by Category |
| GET | /user/profile/allUsers | Retrieve All Users Data |
| GET | /user/profile/2 | Retrieve User Data by Id |
| PUT | /user/updateName/{id} | Update Name Data by Id |
| PUT | /user/editPhotoProfile/{id} | Update Photo Profile Data by Id |
