import { useState } from "react";

    //Recieves an array of questions as a prop and displays them in a list format
    //Also recieves the name of the user as a prop to display a personalized message
const QuizQuestions = ({ questions, name }) => {

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const handleAnswerSubmit = () => {
    event.preventDefault();
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    if (selectedAnswer === questions[0].correct_answer) {
      alert(`Correct! Good job ${name}!`);
    } else {
      alert(`Try again ${name}!`);
    }
  };

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
      <form onSubmit={handleAnswerSubmit}>
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
                        checked={selectedAnswer === answer}
                        onChange={handleAnswerChange}
                      />
                      <span dangerouslySetInnerHTML={{ __html: answer }} />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>
      <button type="submit" style={buttonStyle}>Submit Answer</button>
      <button onClick={() => window.location.reload()} style={buttonStyle}>Restart Quiz</button>
      </form>
    </div>
  );
};

export default QuizQuestions;