import React, { useEffect, useState } from "react";
import "./App.css";
import {
  CategorySelector,
  Loading,
  Question,
  ResultModal,
  Scoreboard,
} from "./components";

export default function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState(null);
  const getQuestions = React.useCallback(() => {
    setIsCorrect(null);

    let url = "https://opentdb.com/api.php?amount=1";

    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      })
      .catch((err) => {
        setQuestion(null);
        console.error(err);
      });
  }, [selectedCategory]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions, selectedCategory]);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestions={getQuestions}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
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
        <button onClick={getQuestions}>Go to next question 👉</button>
      </div>
    </div>
  );
}
