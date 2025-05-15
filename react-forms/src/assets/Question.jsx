import Home from "./Home";
import { useState } from "react";


const QuizQuestions = ({ questions }) => {
  return (
    <div>
      <h2>Trivia Questions</h2>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>
            <p dangerouslySetInnerHTML={{ __html: question.question }} />
            <ul>
              {[...question.incorrect_answers, question.correct_answer]
                .sort(() => Math.random() - 0.5)
                .map((answer, i) => (
                  <li key={i}>
                    <button dangerouslySetInnerHTML={{ __html: answer }} />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuizQuestions;