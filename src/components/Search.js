import React from "react";
import styled from "styled-components";
import axios from "axios";
import AIPrompt from "./AIPrompt";

const Search = () => {
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
          />
        </div>
        <AIPrompt />
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
