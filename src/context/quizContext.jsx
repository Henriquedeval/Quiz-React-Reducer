import { createContext, useReducer } from "react";
import data from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
  score: 0,
  answerSelected: false
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return { ...state, gameStage: STAGES[1] };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestions
      };

    case "CHANGE_QUESTION":
      let nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!state.data[nextQuestion]) endGame = true;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false
      };

    case "CHECK_ANSWER":
      const answer = action.payload.answer;
      const option = action.payload.option;
      let trueAnswer = 0;

      if (state.answerSelected) {
        return state;
      }

      if (answer === option) {
        trueAnswer = 1;
        console.log(state.score);
      }

      return {
        ...state,
        score: state.score + trueAnswer,
        answerSelected: option
      };

    case "GAMEOVER":
      return initialState;
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
