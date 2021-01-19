import { useState, useEffect, useCallback } from "react ";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState("any");
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
}
