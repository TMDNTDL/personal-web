import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';


import colorSharp2 from '../assets/img/color-sharp2.png'


export const Projects = ({ projects, personalProject }) => {


  return (
    <section className="project" id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>
              Projects
            </h2>
            {/* <p>awodihawhdohawoid</p> */}
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className='content'>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            projects={project}
                            id={index}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Jeffrey Lin</Tab.Pane>
                <Tab.Pane eventKey="third">Jeffrey Lin</Tab.Pane>

              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}