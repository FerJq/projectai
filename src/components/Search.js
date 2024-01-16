import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AIPrompt from "./AIPrompt";

const Search = () => {
  //STATE
  const [inputValue, setInputValue] = useState("");
  const [dataResponse, setDataResponse] = useState(false);

  //API
  let context = `You're so passionate about writting, I would like you to generate a 10 lines poem in basic HTML, do not explain your reasoning, make sure to follow the user instruccions, be polite.`;
  let promptprompt = `Generate a 10 lines poem about ${inputValue}`;
  let key = `24fd0ba27a25dt7o304a40659333f2df`;
  let link = `https://api.shecodes.io/ai/v1/generate?prompt=${promptprompt}&context=${context}&key=${key}`;

  //FUNCTIONS
  const catchingInput = (event) => {
    setInputValue(event.target.value);
  };

  const submitInput = () => {
    axios.get(link).then((response) => setDataResponse(response.data.answer));
  };

  return (
    <SearchStyled>
      <BarStyled>
        <div className="mb-3">
          <h3>Type here what genre of poem would you like</h3>
          <FormStyled>
            <input
              type="search"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Search"
              onChange={catchingInput}
            />
            <button
              type="button"
              className="btn btn-info"
              onClick={submitInput}
            >
              Submit
            </button>
          </FormStyled>
        </div>
      </BarStyled>
      <AIPrompt iaprompt={dataResponse} />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin: 0 15rem 0 15rem;
  h3 {
    text-align: left;
    color: black;
  }
  @media (max-width: 900px) {
    justify-content: center;
    display: block;
    margin: auto;
  }
`;
const BarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    box-shadow: 5px 0 5px #eaeaea;
  }
`;

const FormStyled = styled.div`
  display: flex;
  input {
    margin-right: 1rem;
  }

  button {
    box-shadow: 5px 0 5px #eaeaea;
  }
`;

export default Search;
