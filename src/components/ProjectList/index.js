import React, {useState} from 'react'

const ProjectList = ({ project }) => {
    const [projects] = useState([
    {
      name: 'Club Hub Kids',
      description: 'Website for after-school programs and summer camps in the Sacramento Valley.',
      img: 'clubhub.png'
    },
    {
      name: 'Destination Unknown',
      description: 'A road trip planner with maps, weather, budget, and event schedule within the United States.',
      img: 'destination.png'
    },
    {
      name: 'Bubble Space',
      description: 'A social media platform where you can hear from people like you with opinions like yours and like them',
      img: 'horiseon.png'
    },
    {
      name: 'Pencil It In',
      description: 'A simple and easy to use daily web-based planner.',
      img: 'pencil.png'
    },
    {
      name: 'Password Generator',
      description: 'A web-based random password generator.',
      img: 'password.png'
    }
  ]);

    return (
    <section>
        <div className='flex-row'>
            {projects.map((image,i) => (
                <img src={require(`../../assets/projects/${projects.img}`).default}
                alt={image.name}
                className='img-thumbnail mx-1 projects__img'
                key={image.name}
                />
            ))}
            </div>
    </section>
    )
};

export default ProjectList;