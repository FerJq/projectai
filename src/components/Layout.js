import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Layout = () => {
  return (
    <StyledLayout>
      <h1>Welcome to the Bible Quotes AI Generator</h1>
      <StyledList>
        <li>
          <button>Psalms</button>
        </li>
        <li>
          <button>Jeremiah</button>
        </li>
        <li>
          <button>Philliphians</button>
        </li>
      </StyledList>
      <Search />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: block;
  text-align: center;
  color: white;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    margin: 1rem;
  }

  button {
    cursor: pointer;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    width: 200px;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 5px 5px 5px #dedbd2;
  }
`;
export default Layout;
