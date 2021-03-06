This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Simple projects to learn and grow my React knowledge

Assignment 1: Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (the username) and pass the username to the UserOutput component
Add a method to manipulate the state (an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and
stylesheets.

Assignment 2: Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph). Create a new component (=> ValidationComponent) which receives the text length as a prop
Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black). Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop. When you click a CharComponent, it should be removed from the entered text.
