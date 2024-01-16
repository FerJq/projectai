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
        <div className="card text-bg-light mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pic1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Always used Good Manners towards to Build Rapport with{" "}
                  <span>AI Chatbots</span>: Say “Hello,” be nice and respectful
                  with instructions.
                </p>
                <p className="card-text"></p>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-bg-light mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pic2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Using Complete Sentences to Communicate with{" "}
                  <span>AI Assistants</span>: A chat AI assistant is not a
                  search engine. ...
                </p>
                <p className="card-text"></p>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-bg-light mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pic3} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Engaging in Dialogue with <span>AI Assistants</span>: Engage
                  in dialogue with the AI assistant by responding to its
                  answers.
                </p>
                <p className="card-text"></p>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
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

  @media (max-width: 900px) {
    align-items: center;
    display: block;
    justify-content: center;
    margin: 0 auto;
    float: none;
  }
`;

const RulesStyled = styled.div`
  margin: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  color: black;

  @media (max-width: 900px) {
    display: block;
    margin: 1rem;
  }

  .card {
    max-width: 100%;
    box-shadow: 5px 0 5px #eaeaea;
    border: none;

    img {
      max-width: 100%;
      width: 100%;
      position: relative;
      object-fit: cover;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

export default Layout;
