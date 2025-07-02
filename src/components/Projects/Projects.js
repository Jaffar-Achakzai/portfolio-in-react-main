import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Groove from "../../Assets/Projects/portfolio-1.jpg";
import portfolio8 from "../../Assets/Projects/portfolio 9.png";
import gupshup from "../../Assets/Projects/portfolio 2.jpg";
import gymapp from "../../Assets/Projects/portfolio 3.jpg";
import portfolio7 from "../../Assets/Projects/portfolio 8.png";
import MovieFinder from "../../Assets/Projects/portpolio_5.png";
import TravelApp from "../../Assets/Projects/portfolio 7.png";
import portfolio from "../../Assets/Projects/portfolio_1.png";
import MLP from "../../Assets/Projects/portpolio_4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Doctor Appointment"
              description="A doctor appointment booking app. it was built with React.js, Node.js, Express.js, and MongoDB. It allows users to book appointments with doctors, view their profiles, and manage their appointments."
              ghLink="https://github.com/Jaffar-Achakzai/doctorappointment-app"
              demoLink="https://doctorappointment-app.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLP}
              isBlog={false}
              title="Facial Emotion Detector"
              description="A facial emotion detection app built with React.js and TensorFlow.js. It uses machine learning to detect emotions from facial expressions in real-time."
              ghLink="https://github.com/Jaffar-Achakzai/MLP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Groove}
              isBlog={false}
              title="Gadget Groove"
              description="Gadget E-commerce website build with react.js, Material-UI, and Firebase. Have features which allows user for chat on whatsapp ,place an order and add item to cart"
              ghLink="https://github.com/Web-Development-Project-Series/GadgetGroove-Semester-Project-"
              demoLink="https://gadget-groove.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gupshup}
              isBlog={false}
              title="SMARTSPEND - AI based Financial management mobile app"
              description="A financial management mobile app that uses AI to help users manage their finances effectively.This my FYP work built with Flutter and Firebase. It allows users to track their expenses, set budgets, and get financial insights. "
              ghLink="https://github.com/MSaifChanna/smartspend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymapp}
              isBlog={false}
              title="Gym Fitness App"
              description="A gym fitness app built with flutter and Firebase. It allows users to track their workouts, set goals, and manage their fitness journey."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelApp}
              isBlog={false}
              title="Travel Bucket list map"
              description="A travel bucket list map application built with React.js. It allows users to create and manage their travel bucket lists on an interactive map."
              ghLink="https://github.com/Jaffar-Achakzai/travel-backet-list-app"
              demoLink="https://travel-backet-list-app.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieFinder}
              isBlog={false}
              title="Movie Mode Matcher"
              description="Online Movie Mode Matcher website which is made in react js and uses the TMDB API to fetch the movies and display them on the website"
              ghLink="https://github.com/Jaffar-Achakzai/movie-mode-matcher"
              demoLink="https://movie-mode-matcher.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio8}
              isBlog={false}
              title="Daily Affirmation & Gratitude Journal"
              description="Online Daily Affirmation & Gratitude Journal website which is made in react js and uses the OpenAI API to generate daily affirmations and gratitude prompts."
              ghLink="https://github.com/Jaffar-Achakzai/daily-affirmation-gratitude-journal"
              demoLink="https://portfolio-in-react-main-1wgu.vercel.app/" 
              />
           </Col> 
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio7}
              isBlog={false}
              title="Habit Tracker"
              description="A habit tracking app built with React.js. It allows users to create and manage their habits, set goals, and track their progress."
              ghLink="https://github.com/Jaffar-Achakzai/habit-tracer"
              demoLink="https://habit-tracer.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
