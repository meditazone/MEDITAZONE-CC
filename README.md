# MEDITAZONE-APP SPEC-API

## Description
Welcome to the API documentation for the Meditazone-App. This API provides endpoints for user authentication, meditation data retrieval, quotes, and articles related to meditation and mindfulness.

API Documentation : https://documenter.getpostman.com/view/30136709/2s9Ykq5eyN




## How To Run MEDITAZONE-APP API?
If you want to run this API Server on your local machine, you need to do this steps:
- First, clone this repository using this command: `git clone https://github.com/meditazone/MEDITAZONE-CC.git`.
- Second, open your terminal and go to your project's root directory.
- Third, type `npm install` or `yarn install` on your terminal and hit `Enter`.
- Fourth, type `npm i yarn` on your terminal and hit `Enter`.
- Fifth, type `yarn dev` on your terminal and hit `Enter`.
- Finally, the server will run on your `http://localhost:8080`

## API Endpoint
If you want to access our API endpoints, you must have already cloned this repository and completed the previous steps. If you have, you can see several API endpoints below and implement them. Here are the API endpoints along with their descriptions:
| Method | Endpoint | Description |
| ------- | ------- | ------- |
| POST | /auth/signup | Register a new user |
| POST | /auth/signin | Authenticate and sign in a user |
| GET | /user/profile/allUsers | Retrieve All Users Data |
| GET | /user/profile/{id} | Retrieve User Data by Id |
| PUT | /user/updateName/{id} | Update Name Data by Id |
| PUT | /user/editPhotoProfile/{id} | Update Photo Profile Data by Id |
| GET | /auth/user | Retrieve user information |
| GET | /auth/logout |  Log out the currently authenticated user |
| GET | /v1/quotes | Retrieve All Quotes Data |
| GET | /v1/quotes/{id} | Retrieve Quotes Data by Id |
| GET | /v1/quotes/author/{Author} | Retrieve Qoutes Data by Author |
| GET | /v2/article | Retrieve All Article Data |
| GET | /v2/article/{id} | Retrieve Article Data by Id |
| GET | /v2/article/category/{category} | Retrieve Article Data by Category |
| GET | /v3/meditation | Retrieve All Meditation Data |
| Get | /v3/meditation/{id} | Retrieve Meditation Data by Id |
| GET | /v3/meditation/category/{category} | Retrieve Meditatioon Data by Category |
| POST | /favorite/ | Entry Favorite Data |
| PUT | /favorite/{userId}/{favoriteId} | Update Favorite Data |
| DELETE | /favorite/{userId}/{favoriteId} | Delete Favorite Data |
| GET | /favorite/{userId} | Retrieve Favorite Data by Id |
| GET | /favorite/ | Retrieve Favorite Data |


## Example For Using API in Localhost
```js
1.  Request using POST method
    http://localhost:8080/v1/quotes/1

2.  Response from endpoint /v1/quotes/1
    {
        "message": "Success GET Quote By ID.",
        "data": {
            "quote_ID": 1,
            "quote": "Yakinlah dengan potensimu yang tak terbatas. Satu-satunya batasanmu adalah yang kau tetapkan pada dirimu sendiri",
            "author": "Roy T. Bennett, The Light in the Heart",
            "imageUrl": "https://storage.googleapis.com/meditazone-app/bg_quote_img/background_quote.png"
        }
    }

```

