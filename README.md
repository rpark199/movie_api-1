# myFlix API

![GitHub issues](https://img.shields.io/github/issues/eahowell/movie_api?color=yellow)
![GitHub Repo stars](https://img.shields.io/github/stars/eahowell/movie_api)
![GitHub forks](https://img.shields.io/github/forks/eahowell/movie_api)
![GitHub watchers](https://img.shields.io/github/watchers/eahowell/movie_api)

Welcome to the myFlix API! Find the information for favorite movies (directors, actors, genres, etc.) Users can register, log in, and manage their favorite movies.

## Table of Contents

- [myFlix API](#myflix-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
      - [Dependencies](#dependencies)
      - [Dev Depenencies](#dev-depenencies)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
      - [Retrieving ID's](#retrieving-ids)
        - [Parameters](#parameters)
        - [Responses](#responses)
        - [Example cURL](#example-curl)
        - [Parameters](#parameters-1)
        - [Responses](#responses-1)
        - [Example cURL](#example-curl-1)
        - [Parameters](#parameters-2)
        - [Responses](#responses-2)
        - [Example cURL](#example-curl-2)
        - [Parameters](#parameters-3)
        - [Responses](#responses-3)
        - [Example cURL](#example-curl-3)
        - [Parameters](#parameters-4)
        - [Responses](#responses-4)
        - [Example cURL](#example-curl-4)
      - [Interacting with the Users](#interacting-with-the-users)
        - [Parameters](#parameters-5)
        - [Request Body](#request-body)
        - [Responses](#responses-5)
        - [Example cURL](#example-curl-5)
        - [Parameters](#parameters-6)
        - [Responses](#responses-6)
        - [Example cURL](#example-curl-6)
        - [Parameters](#parameters-7)
        - [Request Body](#request-body-1)
        - [Responses](#responses-7)
        - [Example cURL](#example-curl-7)
        - [Parameters](#parameters-8)
        - [Responses](#responses-8)
        - [Example cURL](#example-curl-8)
        - [Parameters](#parameters-9)
        - [Responses](#responses-9)
        - [Example cURL](#example-curl-9)
        - [Parameters](#parameters-10)
        - [Responses](#responses-10)
        - [Example cURL](#example-curl-10)
        - [Parameters](#parameters-11)
        - [Responses](#responses-11)
        - [Example cURL](#example-curl-11)
        - [Parameters](#parameters-12)
        - [Responses](#responses-12)
        - [Example cURL](#example-curl-12)
        - [Parameters](#parameters-13)
        - [Responses](#responses-13)
        - [Example cURL](#example-curl-13)
      - [Interacting with Movies and Directors](#interacting-with-movies-and-directors)
        - [Parameters](#parameters-14)
        - [Responses](#responses-14)
        - [Example cURL](#example-curl-14)
        - [Parameters](#parameters-15)
        - [Responses](#responses-15)
        - [Example cURL](#example-curl-15)
        - [Parameters](#parameters-16)
        - [Responses](#responses-16)
        - [Example cURL](#example-curl-16)
        - [Parameters](#parameters-17)
        - [Responses](#responses-17)
        - [Example cURL](#example-curl-17)
        - [Parameters](#parameters-18)
        - [Responses](#responses-18)
        - [Example cURL](#example-curl-18)
        - [Parameters](#parameters-19)
        - [Responses](#responses-19)
        - [Example cURL](#example-curl-19)
        - [Parameters](#parameters-20)
        - [Responses](#responses-20)
        - [Example cURL](#example-curl-20)
  - [Authentication](#authentication)
  - [Database](#database)
  - [License](#license)

## Getting Started

## Installation

#### Dependencies

- Morgan: ^1.10.0
- Express: ^4.18.2
- Lodash: ^4.17.21
- Body-Parser: ^1.20.2
- Method-Override: ^3.0.0
- UUID: ^9.0.1
- Mongoose: ^8.2.1

#### Dev Depenencies

- ESlint: ^8.56.0
- Nodemon: ^3.0.3

## Usage

- See the API documentation for detailed info.

## API Endpoints

---

#### Retrieving ID's

<details>
 <summary><code>GET</code> <code><b>/genres/[Name]/id</b></code> <code>(returns the genreID from the genre name)</code></summary>

##### Parameters

> | Name | Type     | Data Type | Description           |
> | ---- | -------- | --------- | --------------------- |
> | Name | Required | String    | The name of the genre |

##### Responses

> | http code | content-type               | response                                    |
> | --------- | -------------------------- | ------------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding the genreID           |
> | `400`     | `text/plain;charset=UTF-8` | "The genre " + Name + " was not found" |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/genres/[Name]/id
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/actors/[Name]/id</b></code> <code>(returns the actorID from the actor name)</code></summary>

##### Parameters

> | Name | Type     | Data Type | Description           |
> | ---- | -------- | --------- | --------------------- |
> | Name | Required | String    | The name of the actor |

##### Responses

> | http code | content-type               | response                                    |
> | --------- | -------------------------- | ------------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding the actorID           |
> | `400`     | `text/plain;charset=UTF-8` | "The actor " + actorName + " was not found" |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/actors/[Name]/id
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/directors/[Name]/id</b></code> <code>(returns the directorID from the director name)</code></summary>

##### Parameters

> | Name | Type     | Data Type | Description              |
> | ---- | -------- | --------- | ------------------------ |
> | Name | Required | String    | The name of the director |

##### Responses

> | http code | content-type               | response                                          |
> | --------- | -------------------------- | ------------------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding the directorID              |
> | `400`     | `text/plain;charset=UTF-8` | "The director " + directorName + " was not found" |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/directors/[Name]/id
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/movies/[Movie Title]/id</b></code> <code>(returns the movieID from the movie title)</code></summary>

##### Parameters

> | Name        | Type     | Data Type | Description            |
> | ----------- | -------- | --------- | ---------------------- |
> | Movie Title | Required | String    | The title of the movie |

##### Responses

> | http code | content-type               | response                                |
> | --------- | -------------------------- | --------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding the movieID       |
> | `400`     | `text/plain;charset=UTF-8` | "The movie " + title + " was not found" |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/movies/[title]/id
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/users/[Username]/id</b></code> <code>(returns the userID from the username)</code></summary>

##### Parameters

> | Name     | Type     | Data Type | Description              |
> | -------- | -------- | --------- | ------------------------ |
> | Username | Required | String    | The username of the user |

##### Responses

> | http code | content-type               | response                                  |
> | --------- | -------------------------- | ----------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding the userID          |
> | `400`     | `text/plain;charset=UTF-8` | "The user " + username + " was not found" |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/users/[Username]/id
> ```

</details>

---

#### Interacting with the Users

<details>
  <summary><code>POST</code> <code><b>/users</b></code> <code>(allows new users to register)</code></summary>

##### Parameters

> None

##### Request Body

> A JSON object holding data about the user to add, structured like:
>
> ```json
>{ 
>   "Username": { type: String, required: true },
>   "Password": { type: String, required: true },
>   "Email": { type: String, required: true },
>   "Birthday": Date,
>   "FirstName": { type: String, required: true },
>   "LastName": { type: String, required: true },
>   "FavoriteMovies": [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
>   "ToWatch": [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
> }
> ```

##### Responses

> | http code | content-type               | response                                                                                          |
> | --------- | -------------------------- | ------------------------------------------------------------------------------------------------- |
> | `400`     | `text/plain;charset=UTF-8` | Username already exists                                                                           |
> | `500`     | `text/plain;charset=UTF-8` | Description of the error                                                                          |
> | `201`     | `application/json`         | A JSON object holding data about the user that was added and including a userID, structured like: |
>
> ```json
> {
>   "Username": "String",
>   "Password": "String",
>   "Email": "String",
>   "FirstName": "String",
>   "LastName": "String",
>   "Birthday": Date,
>   "FavoriteMovies": [{ ObjectId }],
>   "ToWatch": [{ ObjectId }], 
>   "_id": Integer
> }
> ```

##### Example cURL

> ```javascript
>  curl -L POST "Content-Type: application/json" http://localhost:8080/users
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/users</b></code> <code>(returns a list of all the users)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                          |
> | --------- | ------------------ | ------------------------------------------------- |
> | `200`     | `application/json` | A JSON object holding data about all of the users |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/users
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/users/[Username]</b></code> <code>(allows users to update their user info)</code></summary>

##### Parameters

> | Name     | Type     | Data Type | Description              |
> | -------- | -------- | --------- | ------------------------ |
> | Username | Required | String    | The username of the user |

##### Request Body

> A JSON object holding data about the user to add, structured like:
>
> ```json
> {
>   "username": "eahowell",
>   "password": "Xyz123!",
>   "firstName": "Liz",
>   "lastName": "Howell",
>   "email": "eahowell@gmailx.com"
> }
> ```

##### Responses

> | http code | content-type               | response                                              |
> | --------- | -------------------------- | ----------------------------------------------------- |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"             |
> | `201`     | `application/json`         | A test message indicating the user's data was updated |

##### Example cURL

> ```javascript
>  curl -L PUT "Content-Type: application/json" http://localhost:8080/users/[Username]
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/users/[Username]</b></code> <code>(returns the details of a specific user)</code></summary>

##### Parameters

> | Name     | Type     | Data Type | Description              |
> | -------- | -------- | --------- | ------------------------ |
> | Username | Required | String    | The username of the user |

##### Responses

> | http code | content-type               | response                                           |
> | --------- | -------------------------- | -------------------------------------------------- |
> | `200`     | `application/json`         | A JSON object holding data about the specific user |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"          |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/users/[Username]
> ```

</details>

<details>
  <summary><code>DELETE</code> <code><b>/users/[Username]</b></code> <code>(allows an existing user to delete their account)</code></summary>

##### Parameters

> | Name     | Type     | Data Type | Description              |
> | -------- | -------- | --------- | ------------------------ |
> | Username | Required | String    | The username of the user |

##### Responses

> | http code | content-type               | response                                                                  |
> | --------- | -------------------------- | ------------------------------------------------------------------------- |
> | `201`     | `application/json`         | A text message indicating the user was deregistered and removed as a user |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"                                 |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/users/[Username]
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/users/[Username]/favorites/[Movie Title]</b></code> <code>(allows users to add a movie to their *Favorites* list)</code></summary>

##### Parameters

> | Name        | Type     | Data Type | Description              |
> | ----------- | -------- | --------- | ------------------------ |
> | Username    | Required | String    | The username of the user |
> | Movie Title | Required | String    | The title of the movie   |

##### Responses

> | http code | content-type               | response                                                                           |
> | --------- | -------------------------- | ---------------------------------------------------------------------------------- |
> | `201`     | `application/json`         | A message indicating the movie was successfully added to the user's Favorites list |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"                                          |

##### Example cURL

> ```javascript
>  curl -L PUT "Content-Type: application/json" http://localhost:8080/users/[Username]/favorities/[Movie Title]
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/users/[Username]/toWatch/[Movie Title]</b></code> <code>(allows users to add a movie to their *To Watch* list)</code></summary>

##### Parameters

> | Name        | Type     | Data Type | Description              |
> | ----------- | -------- | --------- | ------------------------ |
> | Username    | Required | String    | The username of the user |
> | Movie Title | Required | String    | The title of the movie   |

##### Responses

> | http code | content-type               | response                                                                          |
> | --------- | -------------------------- | --------------------------------------------------------------------------------- |
> | `201`     | `application/json`         | A message indicating the movie was successfully added to the user's To Watch list |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"                                         |

##### Example cURL

> ```javascript
>  curl -L PUT "Content-Type: application/json" http://localhost:8080/users/[Username]/toWatch/[Movie Title]
> ```

</details>

<details>
  <summary><code>DELETE</code> <code><b>/users/[Username]/favorites/[Movie Title]</b></code> <code>(allows users to remove a movie from their *Favorites* list)</code></summary>

##### Parameters

> | Name        | Type     | Data Type | Description              |
> | ----------- | -------- | --------- | ------------------------ |
> | Username    | Required | String    | The username of the user |
> | Movie Title | Required | String    | The title of the movie   |

##### Responses

> | http code | content-type               | response                                                                               |
> | --------- | -------------------------- | -------------------------------------------------------------------------------------- |
> | `201`     | `application/json`         | A message indicating the movie was successfully removed from the user's Favorites list |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"                                              |

##### Example cURL

> ```javascript
>  curl -L DELETE "Content-Type: application/json" http://localhost:8080/users/[Username]/favorities/[Movie Title]
> ```

</details>

<details>
  <summary><code>DELETE</code> <code><b>/users/[Username]/toWatch/[Movie Title]</b></code> <code>(allows users to remove a movie from their *To Watch* list)</code></summary>

##### Parameters

> | Name        | Type     | Data Type | Description              |
> | ----------- | -------- | --------- | ------------------------ |
> | Username    | Required | String    | The username of the user |
> | Movie Title | Required | String    | The title of the movie   |

##### Responses

> | http code | content-type               | response                                                                               |
> | --------- | -------------------------- | -------------------------------------------------------------------------------------- |
> | `201`     | `application/json`         | A message indicating the movie was successfully removed from the user's To Watch list |
> | `404`     | `text/plain;charset=UTF-8` | "Username " + username + " was not found"                                              |

##### Example cURL

> ```javascript
>  curl -L DELETE "Content-Type: application/json" http://localhost:8080/users/[Username]/toWatch/[Movie Title]
> ```

</details>

---

#### Interacting with Movies and Directors

<details>
  <summary><code>GET</code> <code><b>/movies</b></code> <code>(returns a list of all the movies)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                           |
> | --------- | ------------------ | -------------------------------------------------- |
> | `200`     | `application/json` | A JSON object holding data about all of the movies |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/movies
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/movies/[Title]</b></code> <code>(returns the data of a specific movie)</code></summary>

##### Parameters

> | Name  | Type     | Data Type | Description            |
> | ----- | -------- | --------- | ---------------------- |
> | Title | Required | String    | The title of the movie |

##### Responses

> | http code | content-type               | response                                                          |
> | --------- | -------------------------- | ----------------------------------------------------------------- |
> | `400`     | `text/plain;charset=UTF-8` | "The movie " + title + " was not found"                           |
> | `200`     | `application/json`         | A JSON object holding data about a specific movie in this format: |
>
> ```json
> {
>   "movieID": 8,
>   "Title": "Hitch",
>   "Year": "2005",
>   "Rated": "PG-13",
>   "Released": "11 Feb 2005",
>   "Runtime": "118 min",
>   "Genre": "Comedy, Romance",
>   "Director": "Andy Tennant",
>   "Writer": "Kevin Bisch",
>   "Actors": "Will Smith, Eva Mendes, Kevin James, Amber Valletta",
>   "Plot": "While helping his latest client woo the woman of his dreams, a professional date-doctor finds that his game doesn't quite work on the gossip columnist with whom he's smitten.",
>   "Language": "English, Spanish",
>   "Country": "USA",
>   "Awards": "4 wins & 24 nominations.",
>   "imdbRating": "6.6",
>   "imdbVotes": "301,857",
>   "imdbID": "tt0386588",
>   "Type": "movie",
>   "DVD": "28 Jun 2005",
>   "BoxOffice": "$179,495,555",
>   "Production": "Sony Pictures",
>   "Website": "N/A",
>   "Response": "True"
> }
> ```

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/movies
> ```

</details>
<details>
  <summary><code>GET</code> <code><b>/directors</b></code> <code>(returns a list of all the directors)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                          |
> | --------- | ------------------ | ------------------------------------------------- |
> | `200`     | `application/json` | A JSON object holding data about all of the directors |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/directors
> ```

</details>
<details>
  <summary><code>GET</code> <code><b>/directors/[Name]</b></code> <code>(returns the info of a specific director)</code></summary>

##### Parameters

> | Name | Type     | Data Type | Description              |
> | ---- | -------- | --------- | ------------------------ |
> | Name | Required | String    | The name of the director |

##### Responses

> | http code | content-type               | response                                                |
> | --------- | -------------------------- | ------------------------------------------------------- |
> | `400`     | `text/plain;charset=UTF-8` | "The director " + directorName + " was not found"       |
> | `200`     | `application/json`         | A JSON object holding data about the specific director. |
>
> ```json
> {
>   "directorID": 1,
>   "Name": "Christopher Nolan",
>   "Full Name": "Christopher Edward Nolan",
>   "Date of Birth": "July 30, 1970",
>   "Birthplace": "London, England, UK",
>   "Known For": ["The Dark Knight Trilogy", "Inception", "Interstellar"],
>   "Awards": [
>     "Academy Award nominations for Best Director and Best Picture for Inception and Dunkirk"
>   ],
>   "IMDb Profile": "https://www.imdb.com/name/nm0634240/"
> }
> ```

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/directors/[Name]
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/genres</b></code> <code>(returns a list of all the genres)</code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                          |
> | --------- | ------------------ | ------------------------------------------------- |
> | `200`     | `application/json` | A JSON object holding data about all of the genres |

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/genres
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/genres/[Genre]</b></code> <code>(returns the info of a specific genre)</code></summary>

##### Parameters

> | Name  | Type     | Data Type | Description                            |
> | ----- | -------- | --------- | -------------------------------------- |
> | Genre | Required | String    | The name of the genre you want info on |

##### Responses

> | http code | content-type               | response                                             |
> | --------- | -------------------------- | ---------------------------------------------------- |
> | `400`     | `text/plain;charset=UTF-8` | "The genre " + genre + " was not found"              |
> | `200`     | `application/json`         | A JSON object holding data about the specific genre. |
>
> ```json
> {
>   "genreID": 6,
>   "name": "Thriller",
>   "description": "Movies characterized by intense excitement, suspense, and anticipation, often featuring plot twists and high stakes.",
>   "example_movies": ["The Silence of the Lambs", "Inception", "Se7en"]
> }
> ```

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/genres/[Genre]
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/actors/[Name]/movies</b></code> <code>(returns the movies a specific actor starred in)</code></summary>

##### Parameters

> | Name | Type     | Data Type | Description                                                    |
> | ---- | -------- | --------- | -------------------------------------------------------------- |
> | Name | Required | String    | The name of the actor your want to see the movies they were in |

##### Responses

> | http code | content-type               | response                                                |
> | --------- | -------------------------- | ------------------------------------------------------- |
> | `400`     | `text/plain;charset=UTF-8` | "The actor " + namr + " was not found"                  |
> | `200`     | `application/json`         | A JSON object holding the movies the actor has been in: |
>
> ```json
> [
>   "The Lord of the Rings: The Fellowship of the Ring",
>   "Armageddon",
>   "The Strangers"
> ]
> ```

##### Example cURL

> ```javascript
>  curl -L GET "Content-Type: application/json" http://localhost:8080/actors/[Name]/movies
> ```

</details>

## Authentication

## Database

## License
