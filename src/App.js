import React, { useState } from "react";
import "./App.css";
import {
  CategorySelector,
  Loading,
  Question,
  ResultModal,
  Scoreboard,
} from "./components";
import useTrivia from "./useTrivia";

export default function App() {
  const { question, getQuestions, category, setCategory } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestions();
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestions={handleNextQuestion}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}

      <div className="question-main">
        {question ? (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        ) : (
          <Loading />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
