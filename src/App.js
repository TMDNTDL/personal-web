import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar"
import { Banner } from './components/Banner';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import projImg1 from './assets/img/dronePic.png'
import projImg2 from './assets/img/project-img2.png'
import projImg3 from './assets/img/flory.png'

import DroneImg from './assets/img/ExploreIsland.svg'
import flowerApp from './assets/img/app.png'
import v1 from './assets/video/V1.mp4'
import flowerDemo from './assets/video/FloryDemo.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProjectDetails } from './components/ProjectDetails';
function App() {
  const projects = [
    {
      title: "Drone Simulation",
      short: "Group Project",
      description: [
        "Over the past eight weeks, our team of three designed a program to control a drone for a rescue simulation. The system efficiently identifies the nearest creek to the emergency point, minimizing both time and operational costs for the rescue mission.",
        "Throughout the project, we explored innovative solutions to reduce time consumption and optimize battery usage. We followed Agile development practices, building an MVP prototype and continuously refining our code during each Agile cycle. This allowed us to make better design decisions and adhere to software design principles.",
        "As the project coordinator, I monitored our progress to ensure we met each milestone, utilizing a Kanban board to manage tasks effectively. I also organized weekly group meetings to conduct brief code reviews and ensure the team stayed aligned with project goals."
      ],
      imgUrl: DroneImg,
      IconImgUrl: projImg1,
      author: "Jeffrey Lin",
      videoUrl: v1,
      videoShow: 'disable'
    },

    {
      title: "Plant Recognition",
      short: "Group Project",
      description: [
        "As a group of five, we collaboratively developed a plant recognition application to address the lack of free solutions available for Android users. Our team designed a scalable solution using a microservices architecture, where each core service component was hosted on a separate server. These modules communicated over the network, following the principles of single responsibility and open-closed design, allowing easy feature expansion with minimal code modification.",

        "We adopted a diverse technology stack. For plant recognition, we integrated both Google Gemini API and a TensorFlow-based CNN model trained on a dataset of 10,000 images. This recognition service was exposed through a Python Flask API to enable communication with other components. Additional user services such as account management, history tracking, and a quiz feature were built using Java Spring Boot and backed by a MySQL database. The Android front-end was developed using the Android SDK, with emulators used for testing and simulation.",

        "As the project's team manager, I maintained detailed team logs, led weekly meetings to brainstorm and perform code walkthroughs, and ensured steady progress through GitHub version control and Kanban board task tracking. The entire development lifecycle followed Agile methodology, enabling us to regularly review and refine our implementation."
      ],
      imgUrl: flowerApp,
      IconImgUrl: projImg3,
      author: "Jeffrey Lin",
      videoUrl: flowerDemo,
      videoShow: 'enable'
    },
  ];

  const personalProject = [
    {
      title: "Maze",
      short: "Group Project",
      description: [
        "Over the past eight weeks, our team of three designed a program to control a drone for a rescue simulation. The system efficiently identifies the nearest creek to the emergency point, minimizing both time and operational costs for the rescue mission.",
        "Throughout the project, we explored innovative solutions to reduce time consumption and optimize battery usage. We followed Agile development practices, building an MVP prototype and continuously refining our code during each Agile cycle. This allowed us to make better design decisions and adhere to software design principles.",
        "As the project coordinator, I monitored our progress to ensure we met each milestone, utilizing a Kanban board to manage tasks effectively. I also organized weekly group meetings to conduct brief code reviews and ensure the team stayed aligned with project goals."
      ],
      imgUrl: DroneImg,
      IconImgUrl: projImg2,
      author: "Jeffrey Lin",
      videoUrl: v1,
      videoShow: 'enable'
    },
  ]
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects projects={projects} personalProject={personalProject} />
            <Contact />
          </div>
        } />
        <Route path="/project/:id" element={
          <ProjectDetails projects={projects} />
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
