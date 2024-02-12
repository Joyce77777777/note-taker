# Note Taker

## Description

Note Taker is a simple, user-friendly application designed to help small business owners write, save, and organize their notes. With an intuitive interface, users can easily keep track of tasks and organize their thoughts, ensuring that important information is just a click away. Built with Express.js and featuring a clean UI, Note Taker streamlines note management on any device.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes, and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column, and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column, and the button disappears
```

## Installation

To install Note Taker, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the necessary dependencies.

## Usage

To start the application, run the following command in the terminal:

```
npm start
```

For development, you can use the nodemon server with:

```
npm run watch
```

Open your browser and navigate to `http://localhost:3001` to start using Note Taker.

## Dependencies

- Express.js for backend server functionality.
- UUID for generating unique identifiers for each note.
- Nodemon (as a development dependency) for automatic server restarts on code changes.
