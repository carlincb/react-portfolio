import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resumePage">
      <div id="doc2" className="resume-t7">
        <div id="inner">
          <div id="hd">
            <div className="row position-relative">
              <div className="resume-start first col-lg-2 w-50">
                <h1>Colleen Fimister</h1>
                <h2>Web Developer | Operations and Administrative Professional</h2>
              </div>

              <div className="w-20 col-lg-2 position-absolute end-0">
                <div className="m-2">
                  <h3>
                    <a  className="btn text-center" id="pdf" href="./resume.pdf" download>
                      Download PDF
                    </a>
                  </h3>
                  <h3 className="text-center">
                    <a href="mailto:carlin.colleen@gmail.com">carlin.colleen@gmail.com</a>
                  </h3>
                  <h3 className="text-center">(936)-225-2436</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div>
              <div>
                <div className="resume-end">
                  <div className="resume-start first">
                    <h2>Profile</h2>
                  </div>
                  <div className="resume-start">
                    <p className="enlarge">
                    Strong leader seeking a career in software development. Experienced professional who strives to organize, simplify, and improve processes in daily operations. Skillset includes communication, teamwork, conflict resolution, problem-solving, technical knowledge, and attention to detail. Currently earning a certificate in Full Stack Web Development from the University of Denver’s Coding Boot Camp. Highly driven and organized, and can be relied upon to get the job done!
                    </p>
                  </div>
                </div>

                <div className="resume-end">
                  <div className="resume-start first">
                    <h2>Skills</h2>
                  </div>
                  <div className="resume-start">
                    <div className="skills">
                      <h2>Web Design</h2>
                      <p>
                        An eye for design! Looking for a sleek webpage, contact me today!
                      </p>
                    </div>

                    <div className="skills">
                      <h2>Software Development</h2>
                      <p>
                        Trained across the Full MERN Stack. Always learning a new technology!
                      </p>
                    </div>

                    <div className="skills">
                      <h2>Project Direction</h2>
                      <p>
                        Proven ability to lead and manage a wide variety of projects in team and independent situations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="resume-end">
                  <div className="resume-start first">
                    <h2>Technical</h2>
                  </div>
                  <div className="resume-start">
                    <ul className="skills">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li className="last">Javascript</li>
                    </ul>

                    <ul className="skills">
                      <li>Jquery</li>
                      <li>Node</li>
                      <li className="last">React</li>
                    </ul>

                    <ul className="skills">
                      <li>MongoDB</li>
                      <li>Windows XP/Vista</li>
                      <li className="last">Linux</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-end">
                  <div className="resume-start first">
                    <h2>Experience</h2>
                  </div>

                  <div className="resume-start">
                    <div className="job">
                      <h2>Facebook</h2>
                      <h3>Senior Interface Designer</h3>
                      <h4>2005-2007</h4>
                      <p>
                        Intrinsicly enable optimal core competencies through
                        corporate relationships. Phosfluorescently implement
                        worldwide vortals and client-focused imperatives.
                        Conveniently initiate virtual paradigms and top-line
                        convergence.{" "}
                      </p>
                    </div>

                    <div className="job">
                      <h2>Apple Inc.</h2>
                      <h3>Senior Interface Designer</h3>
                      <h4>2005-2007</h4>
                      <p>
                        Progressively reconceptualize multifunctional "outside
                        the box" thinking through inexpensive methods of
                        empowerment. Compellingly morph extensive niche markets
                        with mission-critical ideas. Phosfluorescently deliver
                        bricks-and-clicks strategic theme areas rather than
                        scalable benefits.{" "}
                      </p>
                    </div>

                    <div className="job">
                      <h2>Microsoft</h2>
                      <h3>Principal and Creative Lead</h3>
                      <h4>2004-2005</h4>
                      <p>
                        Intrinsicly transform flexible manufactured products
                        without excellent intellectual capital. Energistically
                        evisculate orthogonal architectures through covalent
                        action items. Assertively incentivize sticky platforms
                        without synergistic materials.{" "}
                      </p>
                    </div>

                    <div className="job last">
                      <h2>International Business Machines (IBM)</h2>
                      <h3>Lead Web Designer</h3>
                      <h4>2001-2004</h4>
                      <p>
                        Globally re-engineer cross-media schemas through viral
                        methods of empowerment. Proactively grow long-term
                        high-impact human capital and highly efficient
                        innovation. Intrinsicly iterate excellent e-tailers with
                        timely e-markets.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="resume-end last">
                  <div className="resume-start first">
                    <h2>Education</h2>
                  </div>
                  <div className="resume-start">
                    <h2>Indiana University - Bloomington, Indiana</h2>
                    <h3>
                      Dual Major, Economics and English &mdash;{" "}
                      <strong>4.0 GPA</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              Colleen Fimister &mdash;
              <a href="mailto:carlin.colleen@gmail.com">carlin.colleen@gmail.com</a>
              &mdash; (936) - 225-2436
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
