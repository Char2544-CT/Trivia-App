import { useState } from "react";

    //Recieves an array of questions as a prop and displays them in a list format
const QuizQuestions = ({ questions }) => {


  const handleAnswerChange = (event) => {
    const selectedAnswer = event.target.value

    if (selectedAnswer === questions[0].correct_answer) {
      alert("Correct!");
    } else {
      alert("Try again!");
    }
  }

  //css for the list styling to remove bullets
  //and make it look more like a quiz
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  }

  const buttonStyle = {
    marginTop: "20px",
  }
  

  return (
    <div>
      <h2>Trivia Question</h2>
      <ol style={listStyle}>
        {questions.map((question, index) => (
          <li key={index}>
            <p dangerouslySetInnerHTML={{ __html: question.question }} />
            <ul style={listStyle}>
              {[...question.incorrect_answers, question.correct_answer]
                .sort(() => Math.random() - 0.5)
                .map((answer, i) => (
                  <li key={i}>
                    <label htmlFor={`answer-${i}`}></label>
                      <input
                        type="radio"
                        id={`answer-${i}`}
                        name={`question-${index}`}
                        value={answer}
                        onChange={handleAnswerChange}
                      />
                      <span dangerouslySetInnerHTML={{ __html: answer }} />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>
      <button onClick={() => window.location.reload()} style={buttonStyle}>Restart Quiz</button>
    </div>
  );
};

export default QuizQuestions;