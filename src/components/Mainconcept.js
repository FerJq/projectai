import React from "react";
import styled from "styled-components";

const Mainconcept = () => {
  return (
    <InfoStyled>
      <div className="card text-bg-light mb-3">
        <div className="card-body">
          <h2 className="card-title">
            What is <span>AI?</span>
          </h2>
          <div className="paragraph">
            <p className="card-text">
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
              website from scratch.
            </p>
            <p>
              Essentially, the purpose of AI is to improve the systems we
              already use by automating tasks to make them more efficient. AI
              systems process large amounts of data through algorithms in order
              to find patterns that will help them understand and replicate
              human intelligence by predicting future behavior from an end-user.
              For example, when using an AI-powered chatbot, the system will
              work to preempt a user’s next question by offering information as
              a real chat agent would.
            </p>
          </div>
          <a
            href="https://www.wix.com/encyclopedia/definition/artificial-intelligence?utm_source=google&utm_medium=cpc&utm_campaign=12188669214^122749788651^search%20-%20dsa&experiment_id=^^494823160033^&gclid=CjwKCAiAqY6tBhAtEiwAHeRopcAamcM1jCuJmDzMcKmv4gu78ne5Fu6iswcmtmqOVqtqxTCeiavlOBoCv1AQAvD_BwE"
            className="btn btn-info"
          >
            Learn more
          </a>
        </div>
      </div>
    </InfoStyled>
  );
};

const InfoStyled = styled.div`
  margin: 2rem;
  .card {
    width: 100%;
    border: none;
    box-shadow: 5px 5px 5px #eaeaea;
  }

  span {
    color: violet;
  }

  .paragraph {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      font-weight: 600;
      color: black;
      margin: 2rem;
    }
  }
`;

export default Mainconcept;
