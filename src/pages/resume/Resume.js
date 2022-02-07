import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resumePage">
      <div id="doc2" className="resume-t7">
        <div id="inner">
          <div id="hd">
            <div className="row">
              <div className="resume-section first col-lg-10 w-80">
                <h1 className="title-h1">
                  <span className="first-name">Colleen </span>
                  <span className="last-name">
                    <strong>Fimister</strong>
                  </span>
                </h1>
                <h2 className="title-h2">
                  Web Developer | Operations and Administrative Professional
                </h2>
              </div>

              <div className="w-20 col-lg-2">
                <div className="m-2">
                  <h3>
                    <a
                      className="btn text-center end-0 "
                      id="pdf"
                      href="/assets/resume.pdf"
                      download
                    >
                      Download PDF
                    </a>
                  </h3>
                  <h3 className="text-center">
                    <a href="mailto:carlin.colleen@gmail.com">
                      carlin.colleen@gmail.com
                    </a>
                  </h3>
                  <h3 className="text-center">(936)-225-2436</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div>
              <div>
                <div className="resume-wrapper row profile-h2-wrapper">
                  <div className="resume-section first col-lg-2 w-20 text-center font-weight-bold text-uppercase">
                    <h2 className="pt-1">Profile</h2>
                  </div>
                  <div className="resume-section col-lg-3 w-80 end-0 pt-0 pb-5">
                    <p className="enlarge">
                      Strong leader seeking a career in software development.
                      Experienced professional who strives to organize,
                      simplify, and improve processes in daily operations.
                      Skillset includes communication, teamwork, conflict
                      resolution, problem-solving, technical knowledge, and
                      attention to detail. Currently earning a certificate in
                      Full Stack Web Development from the University of Denver’s
                      Coding Boot Camp. Highly driven and organized, and can be
                      relied upon to get the job done!
                    </p>
                  </div>
                </div>

                <div className="resume-wrapper row skills-wrapper">
                  <div className="resume-section first col-lg-2 w-20 text-center font-weight-bold text-uppercase">
                    <h2 className="h2-wrapper pt-4">Skills</h2>
                  </div>
                  <div className="resume-section col-lg-3 w-80 end-0">
                    <div className="skills">
                      <h2 className="skills-color pt-4">
                        <i className="fas fa-pencil-ruler resume-i"></i> Web
                        Design
                      </h2>
                      <p className="">
                        An eye for design! Looking for a sleek webpage &mdash;
                        contact me today!
                      </p>
                    </div>

                    <div className="skills">
                      <h2 className="skills-color pt-4">
                        <i className="fab fa-sketch resume-i"></i> Software
                        Development
                      </h2>
                      <p className="pr-4">
                        Trained across the Full MERN Stack. Always learning a
                        new technology!
                      </p>
                    </div>

                    <div className="skills">
                      <h2 className="skills-color pt-4">
                        <i className="fas fa-user-friends resume-i"></i> Project
                        Direction
                      </h2>
                      <p className="">
                        Proven ability to lead and manage a wide variety of
                        projects in team and independent situations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="resume-wrapper row">
                  <div className="resume-section first col-lg-2 w-20 text-center font-weight-bold text-uppercase">
                    <h2 className="h2-wrapper pt-4">Technical</h2>
                  </div>
                  <div className="resume-section col-lg-3 w-80 end-0 technical-wrapper pt-4">
                    <ul className="skills">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>Google Fonts</li>
                      <li className="last">Bulma</li>
                    </ul>

                    <ul className="skills">
                      <li>Font Awesome</li>
                      <li>Express</li>
                      <li>Node</li>
                      <li>Sequelize</li>
                      <li>Cloudinary</li>
                      <li>Heroku</li>
                      <li className="last">MySQL</li>
                    </ul>

                    <ul className="skills">
                      <li>Figma</li>
                      <li>GitHub | GitLab</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Handlebars</li>
                      <li>GraphQL</li>
                      <li className="last">React</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-wrapper row jobs">
                  <div className="resume-section first col-lg-2 w-20 text-center font-weight-bold text-uppercase">
                    <h2 className="pt-4">Experience</h2>
                  </div>

                  <div className="resume-section  col-lg-3 w-80 end-0">
                    <div className="job pt-4">
                      <h2>Tutor Doctor Denver</h2>
                      <h3>Director of Operations</h3>
                      <h4>2018-2021</h4>
                      <p>
                        o Managed and coached over 120 local tutors to provide
                        exemplary tutoring services to hundreds of families{" "}
                        <br />o Provided client care and conflict resolution to
                        support tutors and families <br />o Recruited and
                        trained all tutors and academic coaches and provided
                        technical support for all team members <br />o Preserved
                        strong personal professional relationship with every
                        tutor and family <br />o Excelled in identifying talents
                        and attributes to establish successful long-term matches{" "}
                        <br />o Increased efficiency in tutor-student matching
                        process, enabling same-day matches <br />o Researched
                        latest tutoring trends to ensure excellence of service{" "}
                        <br />o Created curriculum for elementary education and
                        academic coaching for cutting edge tutoring methods{" "}
                        <br />o Maintained, monitored, and edited all material
                        used in customer interaction to uphold professional
                        standards <br />o Received 2020 Team Member of the Year
                        for outstanding work
                      </p>
                    </div>

                    <div className="job pt-4">
                      <h2>Dialogos Classical Academy</h2>
                      <h3>Director</h3>
                      <h4>2019-2020</h4>
                      <p>
                        o Founded and directed a hybrid classical academy under
                        the model of the Classical Latin School Association
                        (CLSA) <br />o Designed a curriculum using original
                        sources and Memoria Press for the base syllabus <br />o
                        Created unique tracks for high-level specialization,
                        including Great Books approach to Byzantine History
                      </p>
                    </div>

                    <div className="job pt-4">
                      <h2>St. Patrick Catholic School</h2>
                      <h3>Kumon Mathematics Director</h3>
                      <h4>2011-2012</h4>
                      <p>
                        o Directed Kumon Mathematics Program for all grade
                        levels (Pre-K 3 through 8th) <br />o Tutored and
                        mentored at-risk students <br />o Collaborated with
                        teachers and parents in personalized remedial
                        intervention programs <br />o Organized a motivational
                        student initiative system
                      </p>
                    </div>

                    <div className="job pt-4 last">
                      <h2>Self-Employed | Contract</h2>
                      <h3>Tutor</h3>
                      <h4>2007-2021</h4>
                      <p>
                        <strong>Achievements:</strong> <br />o Helped students
                        gain admittance to prestigious private schools through
                        intensive tutoring and test prep <br />o Provided clear
                        guidelines so that students could organize their
                        schedules and expectations to achieve their goals <br />
                        o Brought student from 53rd percentile to 95th
                        percentile in grade level for Mathematics in national
                        Chinese testing through one summer of intensive tutoring
                        Subjects
                        <br />
                        <strong>Tutored:</strong> <br />o Algebra I and II,
                        Geometry, Trigonometry, and Advanced Mathematics <br />o
                        SSAT, HSPT, SAT, and THEA Mathematics Preparation <br />
                        o History and Language Arts <br />o Essay Writing
                        Support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="resume-wrapper last row education">
                  <div className="resume-section first col-lg-2 w-20 text-center font-weight-bold text-uppercase">
                    <h2 className="pt-4 education-header">Education</h2>
                  </div>
                  <div className="resume-section col-lg-3 w-80 end-0 education-section pt-4">
                    <h2 className="education-h2 row">
                      <div className="col-lg-2 w-75">
                        <strong>Certificate</strong>
                        <span>
                          | Full Stack Web Development &mdash; University of
                          Denver
                        </span>
                      </div>
                      <h4 className="education-city col-lg-2 w-25">
                        Denver, CO <br />
                      </h4>
                    </h2>

                    <h2 className="education-h2 row">
                      <div className="col-lg-2 w-75">
                        <strong>Graduate Studies</strong>
                        <span>
                          | Theology &mdash; International Theological Institute
                        </span>
                      </div>
                      <h4 className="education-city col-lg-2 w-25">
                        Trumau, Austria <br />
                      </h4>
                    </h2>

                    <h2 className="education-h2 row">
                      <div className="col-lg-2 w-75">
                        <strong>Bachelor of Arts</strong>
                        <span>
                          | History &mdash; Thomas Edison State University
                        </span>
                      </div>
                      <h4 className="education-city col-lg-2 w-25">
                        Trenton, NJ <br />
                      </h4>
                    </h2>

                    <h2 className="education-h2 row">
                      <div className="col-lg-2 w-75">
                        <strong>Coursework</strong>
                        <span>
                          | Mathematics, Science, Theology, and Philosophy
                          &mdash; Thomas Aquinas College
                        </span>
                      </div>
                      <h4 className="education-city col-lg-2 w-25">
                        Santa Paula, CA <br />
                      </h4>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              Colleen Fimister &mdash;
              <a href="mailto:carlin.colleen@gmail.com">
                carlin.colleen@gmail.com
              </a>
              &mdash; (936) - 225-2436
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
