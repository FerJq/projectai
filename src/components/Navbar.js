import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            FjS.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="https://github.com/FerJq">
                Github
              </a>
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/"
              >
                Linkedin
              </a>
              <a
                class="nav-link"
                href="https://www.shecodes.io/graduates/64928-fernanda-santiago"
              >
                Shecodes Profile
              </a>
              <a class="nav-link" href="https://github.com/FerJq/projectai">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
