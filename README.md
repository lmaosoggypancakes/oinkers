# Oinkers
## Cross-platform money managing app for iOS and Android
![Home Page](screenshots/home_page.png)
![Edit Account Page](screenshots/edit_account.png)
### Oinkers is a simple and secure platform for keeping track of how you spend your money.
## [Video Demo]()
## Repository Code
Because the source code for the frontend and backend of this application is so large I have separated it into two separate branches of this repo. The code for each can be viewed in their respective branches.
## Installation
Due to Apple's app security regulations I am unable to provide a native iOS executable until it gets verified on the App Store. On Android you can visit the [releases](https://github.com/lmaosoggypancakes/oinkers/releases) tab of this repository and download the `app-debug.apk` file to install it. There is also a web-based version of Oinkers that is accessible from a browser at [oinkers.netlify.app](https://oinkers.netlify.app).

## Tech Stack
This app is built using web technologies that compile to native machine code for iOS and Android. These include:

- [Vue.js](https://v3.vuejs.org) - JavaScript framework for building dynamic web applications (similar to [React](https://reactjs.org))
- [Node.js](https://nodejs.org/en/) - JavaScript runtime that allows executing of JS outside of browsers
- [Vite](https://vitejs.dev) - Frontend tooling for development and building (hot-module reload, sub-second build times to HTML, CSS, and JS)
- [MySQL](http://mysql.org/) - Relational database server
- [NestJS](https://nestjs.com) - Scalable and progressive Node.js framework for building backend servers, written in TypeScript
- [Capacitor](https://capacitorjs.com/) - Cross platform native runtime for web apps, allows easy communication with mobile APIs and maintaining only one codebase for many platforms - built by Ionic
- [Prisma](https://prisma.io) - Modern ORM for communicating with databases in Node.js. Supports migrations and data visualization in almost any SQL-based database.

## Web Server Hosting
The Oinkers API runs on a web server which is hosted in Heroku, and is accessible via [oinkers.herokuapp.com](https://oinkers.herokuapp.com). It also uses a cloud hosted MySQL database, so API calls can be made from anywhere. 

## Security + App Flow
The frontend mobile application communicates with the Oinkers API through HTTP requests, mainly with the Axios library. Most API endpoints, such as creating/editing a post or changing a user's password require that you be authorized in order to access and utilize them. Failiure to provide authorization will return HTTP 403 (Forbidden) as a status code. How can we prove that we are logged in and authorized to access an API resource? Oinkers does this by using [JSON Web Tokens](https://jwt.io).

## JWTs and Authentication
When a user logs in, they send a POST request to the proper URL (in this case, `/auth/login`) and provide the credentials they would like to use. The web server then takes those credentials and compares them with the users stored in the database. If the user is not found or the user provides an incorrect password, then they are unauthorized and cannot log in. If they provide *valid* credentials, then the server issues a JSON Web Token that the frontend stores in the app's local storage. This token can then be used to access restricted Oinkers API endpoints by including this token in the request's HTTP headers, for example:
```
PUT /api/users/
Headers:
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
Although it may seem like gibberish to humans, a computer can easily decode it. The web server is then able to deconstruct the web token and get things like the logged in user, expiration date, hashing algorithm, etc. This way, authentication does not depend on sessions via browser cookies and can be implemented from any client.

