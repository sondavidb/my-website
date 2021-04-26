import React from "react";
//import { Link } from 'react-router-dom';

import Table from "./Table";
import "./App.css";

import avatar from './images/me.jpg';
import school from './images/school.jpg'
import code from './images/code.jpg'
import './App.css';

function App() {
  const columns = [
    {
      id: "name",
      Header: "Name",
      accessor: "name"
    },
    {
      id: "desc",
      Header: "Description",
      accessor: "desc"
    },
    {
      id: "link",
      Header: "Link",
      accessor: "link"
    }
  ];

  const data = [
    {
      "name": "Hangman",
      "desc": "Command-line hangman game based on a YouTube video",
      "link": "https://github.com/sondavidb/hangman"
    },
    {
      "name": "sondavidb.github.io",
      "desc": "This website!",
      "link": "https://github.com/sondavidb/sondavidb.github.io"
    },
    {
      "name": "CS-392",
      "desc": "Systems Programming class assignments",
      "link": "https://github.com/sondavidb/CS-392"
    }
  ];

  return (
    <div className="App">
      <header>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header>

      <div id="about" className="divType1">
        <img src={avatar} alt="Me" className="icon" />
        <p className="bodyTextType1">
          <h2 class="heading">About me!</h2>
          My name is David Son, and I'm a college stuident
          working towards a bachelor's in computer science.
          I've been coding since I was 10 years and haven't stopped
          since. With 6 years of education and counting and 2 years
          of industry experience, I look forward to continuing
          to code for as long as I can!
        </p>
      </div>

      <div id="education" className="divType2">
        <p className="bodyTextType2">
          <h2 class="heading">My Education</h2>
          I've been studying at the Stevens Institute of Technology in
          Hoboken, NJ since 2019 and plan to graduate in May of 2023.
          Before this, I was part of the Academy for Technology and
          Computer Science at the Bergen County Academies in
          Hackensack, NJ. In both high school and college, I participated
          in many clubs and extracurriculars, including hackBCA,
          Stevens Computer Science Club,  
        </p>
        <img src={school} alt="School logo" className="icon" />
      </div>

      <div id="work" className="divType1">
        <img src={code} alt="Bad stock img xd" className="icon" />
        <p className="bodyTextType1">
          <h2 class="heading">Work experience</h2>
          I've worked various positions throughout high school
          and into college. The most relevant positions include my role as a
          front-end developer at True Interaction, and a
          quality assurance tester at HappyFunCorp.
        </p>
      </div>

      <div id="projects">
        <p>
          <h2 class="heading">Projects</h2>
          Below is a list of some repos I have on GitHub,
          with a brief description of each and their
          respective links attached.
        </p>
        <br />
        <Table id="tProj" columns={columns} data={data} />
      </div>

      <footer id="contact">
        <p>
          <h2 class="heading">Contact me</h2>
          Thanks for viewing my website! You can find me on&nbsp;
          <a target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/david-son-a2238918a/">
            LinkedIn
          </a>,&nbsp;
          <a target="_blank" rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/david-son-a2238918a/">
            GitHub
          </a>, or you can&nbsp;
          <a href="mailto:son.david.b@gmail.com">
            email
          </a> me. Have a good one!
        </p>
      </footer>
    </div>
  );
}

export default App;
