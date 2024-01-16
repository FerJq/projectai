import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <IconsStyled>
        <div>
          <i class="fa-brands fa-react"></i> React
        </div>
        <div>
          <i class="fa-solid fa-paper-plane"></i> Netlify
        </div>
        <div>
          <i class="fa-solid fa-text-slash"></i> Styled Components
        </div>
        <div>
          <i class="fa-brands fa-github"></i> GitHub
        </div>
        <div>
          <i class="fa-solid fa-code"></i> VSCode
        </div>
      </IconsStyled>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  color: black;
  font-weight: 600;
  background-color: #f8f9fa;
  padding: 0.5rem;
  margin: auto;

  i {
    color: violet;
    font-family: 600;
    font-size: 2rem;
  }
`;

const IconsStyled = styled.div`
  margin: 0 6rem 0 6rem;
  text-align: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
    display: block;
    margin: auto;
    line-height: 2rem;
  }
`;

export default Footer;
