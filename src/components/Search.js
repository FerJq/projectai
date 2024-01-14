import React from "react";
import styled from "styled-components";
import axios from "axios";

const Search = () => {
  return (
    <SearchStyled>
      <div />
      <form>
        <input type="text"></input>
      </form>
      {}
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin-top: 1rem;
  input {
    width: 500px;
    padding: 0.6rem;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #dedbd2;
  }
`;

export default Search;
