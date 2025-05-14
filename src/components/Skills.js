
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import JS from '../assets/img/JavaScript.png'
import HTML5 from '../assets/img/HTML5.png'
import CSS from '../assets/img/CSS.png'
import colorSharp from '../assets/img/color-sharp.png'
import java from '../assets/img/Java.png'
import react from '../assets/img/React.png'
import python from '../assets/img/Python.png'
import tensorflow from '../assets/img/tensorflow.png'
import pytorch from '../assets/img/Pytorch.png'
import springboot from '../assets/img/springboot.png'
import mysql from '../assets/img/mysql.png'
import aws from '../assets/img/aws.png'
import sklearn from '../assets/img/sklearn.png'

import { SkillsStack } from "./SkillsStack"
import { Container, Col, Row } from "react-bootstrap";

export const Skills = () => {
  const skillSet = [
    {
      source: java,
      name: 'Java',
    },
    {
      source: JS,
      name: 'JavaScript'
    },
    {
      source: HTML5,
      name: 'HTML5'
    },
    {
      source: CSS,
      name: 'CSS'
    },
    {
      source: react,
      name: 'React'
    },
    {
      source: python,
      name: 'Python'
    },
    {
      source: tensorflow,
      name: 'Tensorflow'
    },
    {
      source: pytorch,
      name: 'Pytorch'
    },
    {
      source: springboot,
      name: 'Spring Boot'
    },
    {
      source: mysql,
      name: 'MySQL'
    },
    {
      source: aws,
      name: 'AWS'
    },
    {
      source: sklearn,
      name: 'Scikit-learn'
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // The naming can be any, depends on you
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
                Some text
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {
                  skillSet.map((skills, index) => {
                    return (
                      <SkillsStack
                        key={index}
                        {...skills}
                      />
                    )
                  })
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
