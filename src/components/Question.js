import React from "react";

const sampleAnswers = ["One", "Two", "Three", "Four"];

export default function Question({ question }) {
  const answers = [...question.incorrect_answers, question.incorrect_answer];

  return (
    <div className="question">
      <h2>Question Here</h2>

      {sampleAnswers.map((answer, index) => (
        <button key={index}>answer</button>
      ))}
    </div>
  );
}
