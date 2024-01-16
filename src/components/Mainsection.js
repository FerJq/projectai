import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import inteligent from "../assets/inteligent.jpg";

const Mainsection = () => {
  return (
    <div>
      <StyledHeader>
        <Typewriter
          options={{
            strings: ["Hello", "Welcome to the AI POEMS GENERATOR"],
            autoStart: true,
            loop: true,
            cursor: "",
            font: "2rem",
          }}
        />
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255)),
    url(${inteligent});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  color: white;
  text-align: center;
  padding: 250px 0;

  .Typewriter__wrapper {
    font-size: 4rem;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    .Typewriter__wrapper {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;
export default Mainsection;
