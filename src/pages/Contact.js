import React from 'react';
import codingImg from "../images/coding1.jpg";
import "./contact.css"

function Contact() {
  return <div>
      <section className="contactForm" id="contact">
      <div className="clearfix">
        <img
          src={codingImg}
          className="col-md-6 float-md-start mb-3 ms-md-3 p-5"
          alt="Profile"
        />

<div className="container px-4 px-lg-8 p-5">
                <div className="row gx-4 gx-lg-8 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0 text-dark titleContact">Let's Get In Touch!</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">Ready to start your next project with me? Send me a message and I will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-8">
                        <form id="contactForm" >
                            <div className="form-floating mb-5">
                                <input className="form-control" id="name" type="text" required />
                                <label for="name">Full name</label>
                            </div>
                            <div className="form-floating mb-5">
                                <input className="form-control" id="email" type="email" required />
                                <label for="email">Email address</label>
                            </div>
                            <div className="form-floating mb-5">
                                <input className="form-control" id="phone" type="tel" required/>
                                <label for="phone">Phone number</label>

                            </div>
                            <div className="form-floating mb-5">
                                <textarea className="form-control" id="message"  type="text" required></textarea>
                                <label for="message">Message</label>

                            </div>
                            <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+1 (936) 225-2436</div>
                    </div>
                </div>
            </div>
      </div>

        </section>
  </div>;
}

export default Contact;

