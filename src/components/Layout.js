import React from "react";
import styled from "styled-components";
import Search from "./Search";
//import assets
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const Layout = () => {
  return (
    <StyledLayout>
      <h1>
        Rules to interact with an <span>AI</span>
      </h1>
      <RulesStyled>
        <div class="card text-bg-light mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={pic1} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Always used Good Manners towards to Build Rapport with{" "}
                  <span>AI Chatbots</span>: Say “Hello,” be nice and respectful
                  with instructions.
                </p>
                <p class="card-text"></p>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card text-bg-light mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={pic2} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Using Complete Sentences to Communicate with{" "}
                  <span>AI Assistants</span>: A chat AI assistant is not a
                  search engine. ...
                </p>
                <p class="card-text"></p>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card text-bg-light mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={pic3} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Engaging in Dialogue with <span>AI Assistants</span>: Engage
                  in dialogue with the AI assistant by responding to its
                  answers.
                </p>
                <p class="card-text"></p>
              </div>
              <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </RulesStyled>
      <Search />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  margin-top: 4rem;
  display: block;
  text-align: center;
  color: white;

  span {
    color: violet;
  }

  h1 {
    color: #1c1c1c;
    font-family: "Poppins", sans-serif;
  }
`;

const RulesStyled = styled.div`
  margin: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  color: black;

  .card {
    max-width: 540px;
    box-shadow: 5px 0 5px #eaeaea;
    border: none;

    img {
      object-fit: cover;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export default Layout;
