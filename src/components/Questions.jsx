import React, { useContext } from "react";
import { QuizContext } from "../context/quizContext";
import data from "../data/questions";
import Option from "./Option";

const Questions = (option) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.data[quizState.currentQuestion];

  let questionNow = quizState.currentQuestion + 1;
  let totalQuestions = quizState.data.length;

  const selectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    });
  };

  return (
    <>
      <div className="form-question">
        <p>
          {questionNow} de {totalQuestions}
        </p>
        <h4>{currentQuestion.question}</h4>
        {currentQuestion.options.map((opt) => {
          return (
            <Option
              option={opt}
              key={opt}
              answer={currentQuestion.answer}
              onSelect={selectOption}
            />
          );
        })}
        {quizState.answerSelected && (
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_QUESTION" });
            }}
          >
            Proximo
          </button>
        )}
      </div>
    </>
  );
};

export default Questions;
