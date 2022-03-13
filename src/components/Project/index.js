import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Project(props) {
  return (
    <Container>
      {props.projects.map((project) => (
        <div className='flex-row'>
          <Card>
            <Card.Img href={project.link} target='blank' rel='noreferrer'>
              <img className='project-img' src={require(`../../assets/projects/${project.name}.png`)} alt={project.name} />
            </Card.Img>
            <Card.Title key={project.name}>{project.name}</Card.Title>
            <Card.Subtitle>
              {project.description}
            </Card.Subtitle>
            <Card.Link>
              <a className='project-link'
                href={project.link}
                target='_blank' rel='noreferrer'
              >Link</a>
            </Card.Link>
          </Card>
        </div>
          ))};
    </Container>
  );
}

export default Project;