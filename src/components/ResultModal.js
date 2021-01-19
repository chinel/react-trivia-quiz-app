import React from "react";

export default function ResultModal({ isCorrect, question, getQuestions }) {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect ? (
          <h3>
            👊👊👊
            <br />
            YOU WON!
          </h3>
        ) : (
          <h3>
            😟😢😟
            <br />
            YOU LOST!
          </h3>
        )}

        {isCorrect && (
          <div className="correct-answer">
            <small>The correct answer was:</small>
            <br />
            <strong
              dangerouslySetInnerHTML={{ __html: question.correct_answer }}
            />
          </div>
        )}
        <button onClick={getQuestions}>Go to next question 👉</button>
      </div>
    </div>
  );
}
