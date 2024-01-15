import React from "react";
import Layout from "../components/Layout";
import AIPrompt from "../components/AIPrompt";
import styled from "styled-components";
import Mainsection from "../components/Mainsection";
import Wave from "../components/Wave";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Mainsection />
      <StyledSecondSection>
        <Wave />
        <Layout />
      </StyledSecondSection>
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  align-items: center;
  text-align: center;
`;

const StyledSecondSection = styled.div``;

export default MainPage;
