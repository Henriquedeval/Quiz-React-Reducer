import React, { useContext } from "react";
import { QuizContext } from "../context/quizContext";

const EndGame = () => {
  const [quizState, dispacth] = useContext(QuizContext);
  const totalQuestions = quizState.data.length;

  return (
    <>
      <div className="endgame">
        <h1>Fim de jogo</h1>
        <h2>Score: {quizState.score}</h2>
        <button onClick={() => dispacth({ type: "GAMEOVER" })}>
          Reiniciar
        </button>
      </div>
    </>
  );
};

export default EndGame;
