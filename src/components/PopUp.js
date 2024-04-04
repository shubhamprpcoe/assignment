import React from "react";

export default function PopUp( props) {
    let {finalScore} = props
  return (
    <div className="container">
      <div className="row">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully complete the test . 
            your Score is <b>{finalScore}</b>
          </p>

        </div>
      </div>
    </div>
  );
}
