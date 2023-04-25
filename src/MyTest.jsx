import React from "react";
import { useState, useEffect } from "react";
import linkedin from "./assets/social-icons/linkedin_icon.png";
import github from "./assets/social-icons/github_icon.png";
import instagram from "./assets/social-icons/instagram_icon.png";
import whatsapp from "./assets/social-icons/whatsapp_icon.png";
import profile from "./assets/imgs/profile.jpg";
import Typer from "react-text-typist";
import project from "./assets/imgs/project.jpg";
import githubProject from "./assets/imgs/github.svg";
import skillsData from "./assets/skills/skill.js";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Tilt from "react-parallax-tilt";
import Footer from "./components/footer/Footer.jsx";
export default function MyTest() {
  const logoName = "<Abhii/>";
  const [skills, setSkills] = useState(skillsData);
  // let skilsArray = [];
  const [isHoveringCP, setIsHoveringCP] = useState(false);
  const handleMouseOverCP = () => {
    // skilsArray = skills.relatedTo.split(" ");
    // console.log(skilsArray);
    setIsHoveringCP(true);
  };
  const handleMouseOutCP = () => {
    setIsHoveringCP(false);
  };
  const [isHoveringFS, setIsHoveringFS] = useState(false);
  const handleMouseOverFS = () => {
    setIsHoveringFS(true);
  };
  const handleMouseOutFS = () => {
    setIsHoveringFS(false);
  };
  const [isHoveringMS, setIsHoveringMS] = useState(false);
  const handleMouseOverMS = () => {
    setIsHoveringMS(true);
  };
  const handleMouseOutMS = () => {
    setIsHoveringMS(false);
  };
  const [isHoveringUI, setIsHoveringUI] = useState(false);
  const handleMouseOverUI = () => {
    setIsHoveringUI(true);
  };
  const handleMouseOutUI = () => {
    setIsHoveringUI(false);
  };
  return (
    <div>
      <nav>
        {/* navbar */}
        <div className="navbar">
          <div className="logo">
            <h3 className="pm-0">{logoName}</h3>
          </div>
          <div className="nav-list">
            <li className="nav-list-items">
              <a href="">Home</a>
            </li>
            <li className="nav-list-items">
              <a href="">About</a>
            </li>
            <li className="nav-list-items">
              <a href="">Project</a>
            </li>
            <li className="nav-list-items">
              <a href="">Blog</a>
            </li>
            <li className="nav-list-items">
              <a href="">
                <button className="button">Contact</button>
              </a>
            </li>
            <li className="nav-list-items">
              <a href="">
                <button className="button">Resume</button>
              </a>
            </li>
          </div>
        </div>
      </nav>
      {/* hero-banner */}
      <section>
        <div className="hero">
          <div className="left">
            <div className="infos">
              <h6 className="pm-0 subtitle">hello, I'm</h6>
              <h6 className="title pm-0">
                <span>A</span>bhishek <span>N</span>ale
              </h6>
              <Typer
                cursorClassName="typer-cursor"
                className={"main-title pm-0"}
                cursorBlinkSpeed={600}
                pauseTime={350}
                sentences={[
                  "Full-stack Developer",
                  "React Developer",
                  "UI/UX Developer",
                  "MERN-stack Developer",
                ]}
                loop={true}
              />
              <p className="myDescription">
                I am a skilled Full Stack and Mern Stack Developer with
                expertise in Java, React, MongoDB, Express, Socket IO, Spring,
                JDBC, and Node.js. Let's build together!
              </p>
              <div className="connect">
                <p>Connect with me</p>
                <div className="social-links">
                  <a href="">
                    <img src={github} alt="github" />
                  </a>
                  <a href="">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="imgWrapper">
              <img src={profile} alt="profile-pic" />
            </div>
          </div>
        </div>
      </section>
      {/* project */}
      <section>
        <div className="heading-box">
          <p className="heading">Projects</p>
          <p className="sub-heading">Check Some of My Wonderful Works</p>
        </div>
        <div className="projects">
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button>Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
          {/* <Tilt
            className="tilt-img"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={900}
            scale={1}
            tiltReverse={true}
            transitionSpeed={800}
            gyroscope={false}
          >
          </Tilt> */}
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button className="button">Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button>Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button>Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button>Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={project} alt="project-img" />
            <div className="project-info">
              <p className="project-heading">Project Heading</p>
              <p className="project-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                modi odit, repellendus impedit quas asperiores similique numquam
                perferendis, minima illo, ex ipsum error obcaecati. Molestiae
                reprehenderit architecto atque optio explicabo
              </p>
              <div className="project-btn">
                <button>Visit</button>
                <button>github</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="skills">
          <div className="heading-box">
            <p className="heading">Skills</p>
            <p className="sub-heading">Technologies I often play with</p>
          </div>
          <div className="all-skills flex">
            <div className="section">
              <ul>
                <li
                  className="button"
                  onMouseOver={handleMouseOverFS}
                  onMouseOut={handleMouseOutFS}
                  title="it's not a button"
                >
                  Full-stack Web Developer
                </li>
                <li
                  className="button"
                  onMouseOver={handleMouseOverMS}
                  onMouseOut={handleMouseOutMS}
                  title="it's not a button"
                >
                  MERN-stack Developer
                </li>
                <li
                  className="button"
                  onMouseOver={handleMouseOverCP}
                  onMouseOut={handleMouseOutCP}
                  title="it's not a button"
                >
                  Compitative Programmer
                </li>
                <li
                  className="button"
                  onMouseOver={handleMouseOverUI}
                  onMouseOut={handleMouseOutUI}
                  title="it's not a button"
                >
                  UI/UX Developer
                </li>
                {/* <li className="button" title="it's not a button">
                  Spring developer
                </li> */}
              </ul>
            </div>
            <div className="skill-imgs">
              {isHoveringCP
                ? skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={
                        skill.relatedTo === "Compitative-prog"
                          ? skill.relatedTo
                          : ""
                      }
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  ))
                : skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={""}
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  )) && isHoveringMS
                ? skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={
                        skill.relatedTo.search("Mern-stack") === -1
                          ? ""
                          : "Mern-stack"
                      }
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  ))
                : skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={""}
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  )) && isHoveringFS
                ? skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={
                        skill.relatedTo.search("Full-stack") === -1
                          ? ""
                          : "Full-stack"
                      }
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  ))
                : skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={""}
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  )) && isHoveringUI
                ? skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={
                        skill.relatedTo.search("UI-UX") === -1 ? "" : "UI-UX"
                      }
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  ))
                : skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={""}
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  )) &&
                  skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      relatedTo={skill.relatedTo === "" ? skill.relatedTo : ""}
                      link={skill.link}
                      imgLink={skill.imgLink}
                      name={skill.name}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
