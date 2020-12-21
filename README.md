# Alas Shop

https://alas-shop.netlify.app/home

## Technologies:

- react ^17.0.1
- react-router-dom ^5.2.0
- firebase ^8.1.2
- node-sass ^4.14.1

## Installation

Make sure you have Node.js installed (v12.14.0 or newer).

- Clone git repository
- Run "npm install" command in terminal

## Starting the project

- Run "npm start" command in terminal

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Description

Alas Shop is an app that lets you create a shopping list, helps you save on shopping expenses by giving you suggestions on the optimal quantity of products you need and thus helps in saving the environment. Also it stores your receipts in history so you can always have access to them anytime, anywhere.

## Functionalities

The app has two levels of access, standard user role and admin role. Access on the front end is secured with Guard implementation and on the back end its secured with setting custom-claims by custom server functions. This is achieved by using Firebase services such as Authentication and Functions. All the data is stored in a NoSQL type data base service Cloud Firestore. The suggestions function looks at all your previous purchases from the data base and gives you the lower average amount as a suggestion when creating a new shopping list.

Users can:
- create an account
- create a shopping list
- get an overview of their receipt
- save the receipt to history
- access all their previous receipts from history
- get personalized suggestions on the optimal amount of products they may need on their next shoping list

Admin can:
- Assign other users as admins
- Create products

### Public routes
- Landing page
- Signup page
- Signin page
- PageNotFound

### Private routes
- Home page
- History page
- HistoryItem page

### Admin routes
- Admin
- Create Product
