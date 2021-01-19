import React, { useState } from "react";

export default function Scoreboard() {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
