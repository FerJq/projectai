import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const AIPrompt = ({ iaprompt }) => {
  if (iaprompt) {
    return (
      <div>
        <div className="alert alert-info" role="alert">
          <TypeScriptStyled>
            <Typewriter
              options={{
                strings: iaprompt,
                autoStart: true,
                cursor: "",
                delay: 60,
              }}
            />
          </TypeScriptStyled>
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

const TypeScriptStyled = styled.div`
  display: block;
  margin: 0 10rem 0 10rem;
  .Typewriter__wrapper {
    font-size: 1rem;
    font-weight: 600;
    color: black;
  }
`;

export default AIPrompt;
