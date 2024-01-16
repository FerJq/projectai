import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const AIPrompt = ({ iaprompt }) => {
  console.log(iaprompt);
  if (iaprompt) {
    return (
      <div className="alert alert-info" role="alert">
        <TypeScriptStyled>
          <Typewriter
            options={{
              strings: iaprompt,
              autoStart: true,
              cursor: "",
              delay: 50,
            }}
          />
        </TypeScriptStyled>
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

const TypeScriptStyled = styled.div`
  display: block;
  .Typewriter__wrapper {
    font-size: 1rem;
    font-weight: 600;
    color: black;
  }

  @media (max-width: 900px) {
    justify-content: center;
    display: block;
    margin: auto;
  }
`;

export default AIPrompt;
