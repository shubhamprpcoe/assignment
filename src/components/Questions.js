import React from "react";

export default function Questions(props) {
  let { question, index, handleAnswerChange, totalScore } = props;

  return (
    <>
      <div className="card m-2">
        <div className="card-header">Question{index + 1} </div>
        <div className="card-body">
          <p className="card-text">{question}</p>

          <div>
            <input
              className="form-check-input me-2"
              type="radio"
              id="yes"
              name={"flexRadioDefault" + index}
              value="yes"
              checked={totalScore[index] === "Yes"}
              onChange={() => handleAnswerChange(index, "Yes")}
            />
            <label className="form-check-label" htmlFor="yes">
              yes
            </label>
          </div>

          <input
            className="form-check-input me-2"
            type="radio"
            id="no"
            name={"flexRadioDefault" + index}
            value="no"
            checked={totalScore[index] === "No"}
            onChange={() => handleAnswerChange(index, "No")}
          />
          <label className="form-check-label" htmlFor="no">
            no
          </label>
          <br />
        </div>
      </div>
    </>
  );
}
