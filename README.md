# The Budget App
## React.js + Redux app to manage your budget

Demo app: https://budget-app-c66a6.firebaseapp.com/

## Description

**Budget app** is a browser app to help you manage you budget. It was implemented in **React** with help of **Redux** and local storage.

### Features

- You can log in with any credentials, login page is created only to validate form fields and to use conditional rendering. You're not being authenticated. At least 1 character is needed.
- You can add your expenses or incomes with a neat form which is created with Formik and validated with Yup.
- Your expenses and/or incomes are automatically added to the matching column. Your balance is being updated every time you change change something in your account.
- Your session is saved in local storage with help of Redux.
- Each category of spendings/incomes has its own icon.

## About the project

The project was developed as training of Redux, local storage while using Redux, conditional rendering, sorting third-party data, using and validating form, using Formik and Yup.


### Styling

The styling approach that I chose for this project is **CSS modules** in React. It helps to encapsulate styling for a particular component while having your styling in separated file, not withing .js file.

### Future scope

- Responsive layout, as for now it's only desktop mode.
- Refactoring to minimize repetitions.
- Using real authentication (eg. with Firebase) and external data (MongoDB our fetching from Firebase).


## Project setup

### Requirements

You’ll need to have **Node >= 10** on your local development machine.

### How to run the project in development mode

First, you have to install the dependencies. You can do that by going to the root folder of the project and typing:

    npm install

in the terminal.

To run the project in development mode, type:

    npm start

in the project directory.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You can see the Redux store and actions dispatched in the console of Developer tools of your browser.