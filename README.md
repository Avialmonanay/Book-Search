# Google Book Search        
This application allows you to use a Google API to search for books and save them to your profile. Users will be able to view their saved books any time and remove books from their saved list.
![Google Book Search](https://user-images.githubusercontent.com/108016215/210282019-939c8324-bb9e-475e-961f-aa26d45aaae0.png)


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Features](#features)
- [Video Demo](#video-demo)
- [Contact](#questions)



## Installation
This application has dependencies in both the Client and Server folders that need to be installed. You can run "npm i" from the root folder and it will install and the needed dependencies the application uses at the same time.

## Usage
Upon first accessing the application users will be able to search for books and will have an option to login/signup in the top right. 

Upon clicking login users will be prompted to enter their username and password or to sign up. Upon signing in users book search will now display a save option. 

Upon clicking save the card will change to inform the user this book is already saved. In the background the books information is saved to the users modal. 

Upon selecting Saved Books users will be presented with all books they have saved and have the option to remove them. 

Upon clicking Sign out the users token is removed and authentication is required to access saved books.

## Contribution
If you would like to contribute please contact the developer listed below.

## Features
This is a React application that uses MongoDB for the database, Bootstrap for styling, a Google Book Search API, and Apollo Graph QL for Data Manipulation.

### Dependencies

#### Client
    "@apollo/client": "^3.7.3",
    
    "@testing-library/jest-dom": "^4.2.4",
    
    "@testing-library/react": "^9.3.2",
    
    "@testing-library/user-event": "^7.1.2",
    
    "bootstrap": "^4.4.1",
    
    "graphql": "^15.4.0",
    
    "jwt-decode": "^3.1.2",
    
    "react": "^17.0.1",
    
    "react-bootstrap": "^1.0.1",
    
    "react-dom": "^17.0.1",
    
    "react-router-dom": "^6.2.1",
    
    "react-scripts": "4.0.1"

#### Server
    "apollo-server-express": "^3.6.2",
    
    "bcrypt": "^5.0.0",
    
    "express": "^4.17.2",
    
    "graphql": "^16.3.0",
    
    "jsonwebtoken": "^8.5.1",
    
    "mongoose": "^6.1.8"
    
## Video Demo
https://drive.google.com/file/d/1XuYO5MGbF0pbUYLX2h09tU1h7hUzyACY/view

## Questions
Github Username:Avialmonanay

If you have any additional questions please email me at rexxmadsen@gmail.com


