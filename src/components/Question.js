import React from "react";

const sampleAnswers = ["One", "Two", "Three", "Four"];

export default function Question({ question }) {
  const answers = [...question.incorrect_answers, question.correct_answer];

  return (
    <div className="question">
      <h2>{question.question}</h2>

      {answers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}
