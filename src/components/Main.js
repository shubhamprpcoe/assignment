import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { QUESTIONS } from "../questions";
import PopUp from "./PopUp";

export default function Main() {
  const [totalScore, setTotalScore] = useState(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore ? JSON.parse(storedScore) : {};
  });

  const [finalScore, setFinalScore] = useState(null);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(totalScore));
  }, [totalScore]);

  const handleAnswerChange = (indexVal, answer) => {
    setTotalScore((prevScore) => ({
      ...prevScore,
      [indexVal]: answer,
    }));
    setFinalScore(null);
  };

  const calculateFinalScore = () => {
    const yesAnswers = Object.values(totalScore).filter(
      (answer) => answer === "Yes"
    ).length;
    setFinalScore((yesAnswers / Object.keys(QUESTIONS).length) * 100);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card m-2">
            <div class="card-body">
              <h5 class="card-title">Tendable Coding Assessment</h5>
              <p class="card-subtitle mb-2 text-muted">
                The objective of this coding test is to assess your programming
                skills and problem-solving ability.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {Object.entries(QUESTIONS).map(([key, value], index) => (
            <Questions
              key={key}
              question={value}
              index={index}
              handleAnswerChange={handleAnswerChange}
              totalScore={totalScore}
            />
          ))}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {!finalScore && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={calculateFinalScore}
            >
              Submit
            </button>
          )}
        </div>
        {finalScore && (
          <div className="row">
            <PopUp finalScore={finalScore} />
          </div>
        )}
      </div>
    </>
  );
}
