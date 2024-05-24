import type { NextPage } from "next";
import "../../styles/text.css";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Nicholas Dimidik <span>Computer Engineer</span>
                  </h2>
                  <p>
                    Computer engineer passionate in content creation, hardware design, and artifical intelligence. 
                    Professionally started as a Full-Stack web developer quickly moving into Silicon Validation and now enjoying creating everything AI. 
                    Currently working on U-Fi, a personal finance assistant & dashboard with a good friend from Microsoft.
                    <br/><br/>
                    Hobbies include working building a  <b className="full-text">FULL</b>-stack AI suite with a custom tensor core FPGA, remote camera system, backend service, hand-built neural net (in rust) and web interface.  
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Linkedin : <span><a href="https://www.linkedin.com/in/nicholas-dimidik-71b20b159/">Linkedin</a></span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>NWdimidik@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>CMPE</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 408-607-7473</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>San Jose, CA</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Not Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn btn-disabled hire-me"
                        aria-disabled={true}
                        style={{cursor: "default"}}
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Full-Stack</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Hardware Design</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>System Architechture</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Electrical</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2024
                          </h6>
                          <h4 className="timeline-title">
                            Bachelors in Computer Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2019 I began my journey to become a Computer Engineer. Choosing this as I love to tinker with all aspects of a computer from software down to the hardware.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">
                            John Hopkins Certificate
                          </h4>
                          <p className="timeline-text">
                            Wanting to gain more experience in web development I&apos;d completed an online course for Web Development provided by John Hopkins. This gave me the fundamentals of <b>HTML, CSS, JS</b> which I took with me to learn more abstract frameworks like <b>React, React Native, NextJS, Astro</b>.                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to present
                          </h6>
                          <h4 className="timeline-title">
                            Self-Taught Programming
                          </h4>
                          <p className="timeline-text">
                            Programming since the age of 12 starting with modding games, transitioning to making them and later moving to making the machines to run them, the computer has always been a fundamental part of my life. Read more about this in the experience section.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                         {/* Timeline Item */}
                         <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to 2024
                          </h6>
                          <h4 className="timeline-title">Autopilot Silicon Validation Internship - Tesla</h4>
                          <p className="timeline-text">
                            My time at Tesla was spent expanding our HIL infrastructure for testing, gahtering data, and analysis of the Autopilot boards. Using a variety of tools and protocols such as <b>Vite, Ansible, AWS, Redis, CAN, UART</b> and working closely with my mentor and Electrical Engineers I was able create toolchains that <b>increased test time by 50%</b> and <b>reduced analysis time from hours to seconds</b>. 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                         {/* Timeline Item */}
                         <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> June to Nov - 2022
                          </h6>
                          <h4 className="timeline-title">Mobile Software Engineer - Xircle</h4>
                          <p className="timeline-text">
                            Using <b>React Native, AWS, PostHog</b> I created user analytics and messaging system for our student peer connection startup. This was a great foyer into full-stack mobile development and data analytics to drive user engagement. 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">Web Development</h4>
                          <p className="timeline-text">
                            Wanting to create end-user products I shifted my focus on web-development. This allowed me to go throught he start-up craze but also learn value skills such as the OSI model and it&apos;s implimentations. At this time I focused on <b>React</b> development as it took a heirarchical approach to web development. 
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to 2019
                          </h6>
                          <h4 className="timeline-title">
                            The Beginning
                          </h4>
                          <p className="timeline-text">
                            2013 is when I began programming. Starting with a lua-based language for the game Garry&apos;s Mod, manipulating the world to my 12 year old self&apos;s will.
                            Later moving into the game development sphere, using Unreal engine to create Arma-like shooter sim&apos;s for VR during the mid 2010&apos; VR craze.
                            <br/><br/>
                            The languages covered during this time were extensive but mostly focused around <b>Lua, C, C++, C#</b>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
