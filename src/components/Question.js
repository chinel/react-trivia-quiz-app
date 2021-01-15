import React from "react";

export default function Question({ question }) {
  const answers = [...question.incorrect_answers, question.correct_answer];

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}
