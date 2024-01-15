import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Layout = () => {
  return (
    <StyledLayout>
      <h1>Rules to interact with an AI</h1>
      <RulesStyled>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Using Good Manners to Build Rapport with AI Chatbots: Say “Hello,”
              be nice and respectful.
            </p>
          </div>
        </div>

        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Using Complete Sentences to Communicate with AI Assistants: A chat
              AI assistant is not a search engine. ...
            </p>
          </div>
        </div>

        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Engaging in Dialogue with AI Assistants: Engage in dialogue with
              the AI assistant by responding to its answers.
            </p>
          </div>
        </div>
      </RulesStyled>
      <Search />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  margin-top: 2rem;
  display: block;
  text-align: center;
  color: white;

  h1 {
    color: black;
  }
`;

const RulesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: black;
`;

export default Layout;
