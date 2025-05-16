Hello World


**Home Component- The home component is the main component that 'GETS' the data from the API.
It stores the data in a useState object with name, category, and difficulty properties. 


The handleChange function is set to trigger when either the text box or drop down menu changes.
It hold previous state so that each property in forms can change and save state rather than overwriting the whole thing each time the target value changes.

The handleSubmit function triggers when the submit button is clicked. It provides form validation, making sure all fields are filled out. An error message is displayed with the error state variable.
There is conditional rendering at the end of the form in the return HTML. If 'error' has value, a paragraph element is displayed with the current error message.
handleSubmit runs an asyncronous funtion and fetching the API data which is passed into the forms object. Else, an Error is thrown. The data we get back is passed into setQuizData.

Some more conditional rendering that if quizData has value from the API and it's value is more than 0, the QuizQuestions Component runs and is sent two props, questions and name.

**Question Component- QuizQuestions recieves the questions from the API as a prop and the user input in the textbox as a prop(their name). Two event listeners are created to handle the answer change and the answer onClick submit button. When submit is clicked handleAnswerSubmit makes sure an answer is selected and check if the answer is correct. The user recieves a message based on if their answer is correct. Their name prop is used.

Some custom styling is created here to overwrite the default list styling. This makes the app look more like a trivia app. 

In the return statement, The question itself is mapped in a new array. 'dangerouslySetInnerHTML' is used so the question renders properly. It is in a paragraph element. 

Then the questions are mapped in a new array with a spead operator covering the first 3 incorrect questions and then the correct one. The .sort() Math is used to re-sort the array so that the correct answer is not always in the same place. The answers are displayed as radio buttons and onChange, stores in the setSelectedAnswer state variable so it always has the current value. 

Once the form is submitted, the user is alerted. They have the option to reset the form to get a new question, which just reloads the page.
