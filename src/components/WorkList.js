import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import worklistData from '../constants/worklistData'

const WorkList = () => {
  return (
    <div>
      <h1 id="work" className="mb-4 ">
        Work
      </h1>

      <Container className="text-md-left text-center">
        {worklistData.map(work => (
          <Row className="mb-4 border border-light rounded bg-light" key={work.projectName}>
            <Col md={6} className="cardImageContainer">
              <img src={work.image} alt={work.projectName} className="cardImage" />
            </Col>
            <Col md={6} className="mt-4 mt-md-0 p-3">
              <h3>{work.projectName}</h3>
              <p>{work.description}</p>
              <p>
                {work.url && (
                  <Button variant="success" href={work.url} target="_blank" rel="noreferrer" className="mr-2">
                    Demo
                  </Button>
                )}
                {work.githubUrl && (
                  <Button variant="success" href={work.githubUrl} target="_blank" rel="noreferrer">
                    Github
                  </Button>
                )}
              </p>
              <p>Technology used:</p>
              <div className="techList" md={3}>
                {work.techStack.map(tech => (
                  <div key={tech}>{tech}</div>
                ))}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default WorkList
