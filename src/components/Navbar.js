import React from "react";
import styled from "styled-components";

const Navbar = () => {
  // eslint-disable-next-line
  return (
    <NavbarStyled>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <span>FjS.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="https://github.com/FerJq">
                Github
              </a>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/"
              >
                Linkedin
              </a>
              <a
                className="nav-link"
                href="https://www.shecodes.io/graduates/64928-fernanda-santiago"
              >
                Shecodes Profile
              </a>
              <a className="nav-link" href="https://github.com/FerJq/projectai">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </nav>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  span {
    color: violet;
    font-weight: 700;
  }
`;

export default Navbar;
