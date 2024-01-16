import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import AIPrompt from "./AIPrompt";

const Search = () => {
  //STATE
  const [inputValue, setInputValue] = useState("");
  const [dataResponse, setDataResponse] = useState(false);
  //FUNCTIONS
  const catchingInput = (event) => {
    setInputValue(event.target.value);
  };
  //API
  let context = `I would like to have just one poem, be polite, don't show your arguments`;
  let promptprompt = `Tell me a poem about ${inputValue}`;
  let key = `24fd0ba27a25dt7o304a40659333f2df`;
  let link = `https://api.shecodes.io/ai/v1/generate?prompt=${promptprompt}&context=${context}&key=${key}`;
  axios.get(link).then((response) => setDataResponse(response.data.answer));

  return (
    <SearchStyled>
      <BarStyled>
        <div className="mb-3">
          <h3>Type here what genre of poem would you like</h3>
          <label className="form-label"></label>
          <input
            type="search"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
            onChange={catchingInput}
          />
        </div>
        <AIPrompt iaprompt={dataResponse} inputvalue={inputValue} />
      </BarStyled>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin: 4rem;
`;
const BarStyled = styled.div`
  input {
    box-shadow: 5px 0 5px #eaeaea;
  }
  h3 {
    text-align: left;
    color: black;
  }
`;

export default Search;
