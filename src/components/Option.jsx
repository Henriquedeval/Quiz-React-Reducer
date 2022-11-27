import React, { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const Option = ({ option, answer, onSelect }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <input
        className={`option-btn ${
          quizState.answerSelected && option === answer ? "correct" : ""
        }  ${quizState.answerSelected && option != answer ? "wrong" : ""}`}
        type="button"
        value={option}
        onClick={() => onSelect(option)}
      />
    </>
  );
};

export default Option;
