import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="d-flex footerPage">
      <div className="list-inline mx-auto justify-content-center">
        <div className="list-inline-item">
          <a
            className="contact_child2"
            href="https://www.linkedin.com/in/colleen-fimister/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin text-muted"></i>
          </a>
        </div>
        <div className="list-inline-item">
          <a
            className="contact_child2"
            href="https://github.com/carlincb"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github text-muted"></i>
          </a>
        </div>
        <div className="list-inline-item">
          <a
            className="contact_child2"
            href="https://angel.co/colleen-fimister"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-angellist text-muted"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
