import { useState, useEffect, useCallback } from "react ";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState("any");
  const getQuestions = useCallback(() => {
  

    let url = "https://opentdb.com/api.php?amount=1";

    if (category !== "any") url += `&category=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      })
      .catch((err) => {
        setQuestion(null);
        console.error(err);
      });
  }, [category]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions, category]);

  return { question, category, setCategory, getQuestions };
}
