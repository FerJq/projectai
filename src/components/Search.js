import React from "react";
import styled from "styled-components";
import axios from "axios";
import AIPrompt from "./AIPrompt";

const Search = () => {
  return (
    <SearchStyled>
      <InfoStyled>
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <h5 class="card-title">What is AI?</h5>
            <p class="card-text">
              AI, which stands for artificial intelligence, is a branch of
              computer science that develops machine systems capable of
              demonstrating behaviors linked to human intelligence. AI programs
              use data collected from different interactions to improve the way
              they mimic humans in order to perform tasks such as learning,
              planning, knowledge representation, perception and
              problem-solving. Artificial intelligence technology is used for a
              wide range of applications, including in web development, such as
              automated chatbots for customer service, product recommendations
              based on a user’s habits, speech recognition, and even to build a
              website from scratch. Essentially, the purpose of AI is to improve
              the systems we already use by automating tasks to make them more
              efficient. AI systems process large amounts of data through
              algorithms in order to find patterns that will help them
              understand and replicate human intelligence by predicting future
              behavior from an end-user. For example, when using an AI-powered
              chatbot, the system will work to preempt a user’s next question by
              offering information as a real chat agent would.
            </p>
            <a
              href="https://www.wix.com/encyclopedia/definition/artificial-intelligence?utm_source=google&utm_medium=cpc&utm_campaign=12188669214^122749788651^search%20-%20dsa&experiment_id=^^494823160033^&gclid=CjwKCAiAqY6tBhAtEiwAHeRopcAamcM1jCuJmDzMcKmv4gu78ne5Fu6iswcmtmqOVqtqxTCeiavlOBoCv1AQAvD_BwE"
              class="btn btn-info"
            >
              Learn more
            </a>
          </div>
        </div>
      </InfoStyled>
      <BarStyled>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="search"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
        </div>
        <AIPrompt />
      </BarStyled>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
const BarStyled = styled.div`
  input {
    box-shadow: 5px 0 5px #eaeaea;
  }
`;
const InfoStyled = styled.div`
  .card {
    width: 100%;
    border: none;
    box-shadow: 5px 0 5px #eaeaea;
  }
`;

export default Search;
