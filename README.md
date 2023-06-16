# README

# Getting Started

To set up this repository in your local machine, you can clone it like so:

```git@github.com:ogada-otieno/Sunny-Books.git```

# Client side

## What it does?

- User can view the landing page and scroll through the list of books
- User should be able to add a book to the cart
- User should be able to click on the book and see additional information

## Items to debug and include

- User registration and login
- Checkout System
- Configure payment systems such as mpesa and stripe
- Include a page for current orders and full list of all order
- Admin functionality 

## Technologies used

1. React
2. Redux/Redux-toolkit
3. Material UI
4. Vercel for deployment

## Available Scripts

In the project directory, you can run:

### `cd client`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

You can choose to run the application in production mode after the build. 

```serve -s build```

Anytime you make changes to the files in the client directory, you will need to build it again (this only applies if you want to run the production mode.)

# Server side

## ERD
![alt text](/assets/erd.png)

This section documents the steps necessary to get the API up and running.

## Technologies used

1. Ruby v.2.7.4
2. Ruby on Rails 
3. Bcrypt
4. SQLITE for Database
5. Render for deployment

## System dependencies

All dependencies are included in the gemfile. It is advisable not to make changes to these unless you know what you are doing.

## Configuration

To set up the application, it is important to run:

```bundle install`

This will ensure that all the necessary gems are installed.

## Database creation

The normal steps for seeding, migration apply. You must be conversant with rails in order to run this API.