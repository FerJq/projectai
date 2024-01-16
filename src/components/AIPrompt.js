import React from "react";

const AIPrompt = ({ iaprompt, inputvalue }) => {
  if (inputvalue) {
    return (
      <div>
        <div className="alert alert-info" role="alert">
          <h5>{iaprompt}</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="alert alert-info" role="alert">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h6>Please wait, we are loading our data...</h6>
        </div>
      </div>
    );
  }
};

export default AIPrompt;
