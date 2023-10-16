# Espresso Emporium Coffee Store Management Website

Espresso Emporium is a web application for managing a coffee store. It is built using a variety of technologies to provide a seamless coffee-related experience for both customers and administrators. Below, you'll find an overview of the main functionalities and features of the Espresso Emporium website.



## Technologies Used

- **Client-side**: React, React Router, Tailwind CSS, Daisy.
- **Authentication**: Firebase (Email and Password login, Google signup and signin)
- **Alerts**: SweetAlert2 for displaying success and error messages
- **Server-side**: Node.js, Express, CORS
- **Database**: MongoDB

## Functionality Overview

### Authentication

- Users can sign up and log in using their email and password.
- Users can also sign up and sign in using their Google account via a popup.
- SweetAlert2 is used to display success and error messages related to authentication.

### Navigation

- The website includes a navigation bar with the website's logo and name.
- There is a "Sign In" button in the navigation bar.
- If a user signs in with Google, their name and profile will be displayed in the navigation bar along with the "Sign Out" button.
- The "Sign In" button becomes a "Sign Out" button when the user is signed in.
- Users can sign out by clicking the "Sign Out" button.
- The website utilizes the `onAuthStateChanged` function to manage user authentication state.

### Home Page

- The home page includes a banner section.
- Following the banner, there are multiple coffee cards displayed.
- Each coffee card includes an image of the coffee, its name, chef, and price.
- Each coffee card has three buttons:
    1. A button to navigate to the coffee details page.
    2. A button to navigate to the coffee update page.
    3. A button to delete the coffee card from the home page.
- Users can access the coffee details, update, and delete features.

### Coffee Details and Users Pages

- The coffee details and users pages are private routes.
- Users must be logged in to access these pages.

### Footer

- The footer contains a "See User" button.
- The "See User" button allows users to navigate to the user route.

### Add Coffee Page

- Users can add coffee by providing the necessary information.

### Update Coffee Page

- Users can update or modify existing coffee cards.

### Sign Up

- Users can sign up with their email and password.
- Google sign-up is also available for users.

This README provides an overview of Espresso Emporium, outlining the technologies used and the various functionalities and features of the website. Feel free to explore the website and enjoy managing your coffee store!

