import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const WorkList = () => {
  return (
    <div className="" >
      <h1 id="work" className="mb-4 ">
        Work
      </h1>

      <Container className="text-md-left text-center">
        <Row className="mb-4 border border-light rounded bg-light">
          <Col md={6} className="cardImageContainer">
            <img
              src="firebase-chat2.png"
              className="cardImage"
              alt="firebase-chat"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0 p-3">
            <h3>Firebase Chat</h3>
            <p>Online instant chat app using firebase backend</p>
            <p>
              <Button
                variant="success"
                href="https://fir-chat-56261.web.app"
                target="_blank"
                rel="noreferrer"
                className = "mr-2"
              >
                Demo
              </Button>
              <Button
                variant="success"
                href="https://github.com/lmfjeff/firebase-chat"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Button>
            </p>
            <p>Technology used:</p>
            <div className="techList" md={3}>
              <div>Firebase firestore</div>
              <div>Firebase auth</div>
              <div>React</div>
            </div>
          </Col>
        </Row>

        <Row className="mb-4 border border-light rounded bg-light">
          <Col md={6} className="cardImageContainer">
            <img
              src="task-tracker.png"
              className="cardImage"
              alt="task-tracker"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0 p-3">
            <h3>Task Tracker</h3>
            <p>To-do list synced with online database</p>
            <p>
              <Button
                variant="success"
                href="https://task-tracker-210517.herokuapp.com"
                target="_blank"
                rel="noreferrer"
                className = "mr-2"
              >
                Demo
              </Button>
              <Button
                variant="success"
                href="https://github.com/lmfjeff/Task-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Button>
            </p>
            <p>Technology used:</p>
            <div className="techList" md={3}>
              <div>MongoDB</div>
              <div>React</div>
              <div>Express js</div>
              <div>JWT auth</div>
              <div>bcrypt encrytion</div>
            </div>
          </Col>
        </Row>

        <Row className="border border-light rounded bg-light">
          <Col md={6} className="cardImageContainer">
            <img
              src="wordpress.jpg"
              className="cardImage border"
              alt="wordpress"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0 p-3">
            <h3>Wordpress E-shop</h3>
            <p>Multilingual online shop with custom layout</p>
            <p>
              <Button
                variant="success"
                href="https://global.lmfjeff.com"
                target="_blank"
                rel="noreferrer"
                className = "mr-2"
              >
                Demo
              </Button>
            </p>
            <p>Technology used:</p>
            <div className="techList" md={3}>
              <div>Wordpress backend</div>
              <div>Elementor page builder</div>
              <div>Woocommerce</div>
              <div>Polylang</div>
              <div>SMTP plugin</div>
            </div>
          </Col>
        </Row>

      </Container>

      
    </div>
  );
};

export default WorkList;
