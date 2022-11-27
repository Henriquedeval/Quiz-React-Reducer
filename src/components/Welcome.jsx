import React, { useContext } from "react";
import { QuizContext } from "../context/quizContext";
const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Inicie seu Quiz Agora</p>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_STAGE" });
          }}
        >
          Iniciar
        </button>
      </div>
    </>
  );
};

export default Welcome;
