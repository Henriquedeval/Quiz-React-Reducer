import Welcome from "./components/Welcome";
import "./styles.css";
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quizContext";
import Questions from "./components/Questions";
import EndGame from "./components/Endgame";

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <>
      <h1>Quiz de programação</h1>

      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <EndGame />}
    </>
  );
};

export default App;
