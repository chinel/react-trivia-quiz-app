import React, { useEffect, useState } from "react";
import "./App.css";
import { CategorySelector, Question, Scoreboard } from "./components";

export default function App() {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("any");
  const getQuestions = React.useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";

    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions, selectedCategory]);

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}

      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button on>Go to next question 👉</button>
      </div>
    </div>
  );
}
