# Actors React App

This is a simple React.js application that fetches a list of actors from the Star Wars API and displays them as cards. Each card includes the actor's name, height, birth year, and a "Detail" button. Clicking the "Detail" button displays the details of the selected actor in a separate component.

## Installation

1. Clone the repository: git clone https://github.com/Kibreab-kb-kb/mereb_react_challenge.git
2. Navigate to the project directory: cd mereb_react_challenge
3. Install the dependencies: npm install

## Usage

1. Start the development server: npm start
2. Open your web browser and visit: http://localhost:3000

## Features

-   Fetches a list of actors from the Star Wars API.
-   Displays actors as cards with their name, height, birth year, and a "Detail" button.
-   It handles loading and error states.
-   Includes unit tests to ensure component functionality.

## Technologies Used

-   React.js
-   TailwindCSS
-   axios
-   Jest (for unit testing)

## Folder Structure

```
src
├── components
│ ├── Card
│   ├── Card.jsx
│   ...
│
├── App.js
└── App.test.js
```

The `components` folder stores the the components that will be used for the app.

The `App.js` file serves as the entry point for the entire website.
