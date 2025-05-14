import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const ProjectCard = ({ projects, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Col className="project-card" sm={6} md={4} onClick={handleClick}>
      <div className='proj-imgbx'>
        <img src={projects.IconImgUrl} />
        <div className='proj-txtx'>
          <h4>{projects.title}</h4>
          <span>{projects.short}</span>
        </div>
      </div>
    </Col>
  )
}