import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Layout />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  margin: 4rem;
`;

export default MainPage;
