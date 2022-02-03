import React from 'react';

function Home() {
  return (
    <div>
      <section className="wrapper">
        <div className="banner">
          <div className="header">
            <p className="subtitle">Software Engineer</p>
            <h1 className="title">
              Hi, I am
              <br />
              <span className="underline">Colleen</span> Fimister
            </h1>
            <div className="contact">
              <div className="contact_parent">
                <a
                  className="contact_child"
                  href="https://www.linkedin.com/in/colleen-fimister/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="contact_parent">
                <a
                  className="contact_child"
                  href="https://github.com/carlincb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div className="contact_parent">
                <a
                  className="contact_child"
                  href="mailto:carlin.colleen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </div>
              <div className="contact_parent">
                <a
                  className="contact_child"
                  href="tel:936.225.2436"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-phone-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="profile"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
