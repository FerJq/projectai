import React from "react";
import styled from "styled-components";
import axios from "axios";

const Search = () => {
  return (
    <SearchStyled>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="search"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Search"
        />
      </div>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  margin-top: 2rem;
`;

const RulesStyled = styled.div`
  color: black;
`;

export default Search;
