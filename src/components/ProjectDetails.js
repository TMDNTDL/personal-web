import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import backArrow from '../assets/img/left_arrow.png'
export const ProjectDetails = ({ projects }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[id];

  const handleClick = () => {
    navigate('/');
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  return (
    <div className='project-details'>
      <div className="header">
        <span className="go-back" onClick={handleClick}>
          <img className="backArrow" src={backArrow} />
        </span>
        <h2>{project.title}</h2>
      </div>

      <h4>Author: {project.author}</h4>
      <div>
        {
          project.description.map((line, index) => {
            return (
              <p className='line' key={index}>
                {line}
              </p>
            )
          })
        }
      </div>
      <img src={project.imgUrl} alt={project.title} />
      <p className={project.videoShow === 'enable' ? "project-txt" : "project-txt-inactive"}>Here is a small project demo:</p>
      <div className='video-container'>
        <video className={project.videoShow === 'enable' ? "project-video" : "project-video-inactive"} controls>
          <source src={project.videoUrl} type='video/mp4' />
        </video>
      </div>
    </div >
  )
}