import React from "react";

const sampleAnswers = ["One", "Two", "Three", "Four"];

export default function Question({ question }) {
  return (
    <div className="question">
      <h2>Question Here</h2>

      {sampleAnswers.map((answer, index) => (
        <button key={index}>answer</button>
      ))}
    </div>
  );
}
