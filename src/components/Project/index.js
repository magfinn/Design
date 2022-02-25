import React, { useEffect, useState } from 'react';
import clubhub from '../../assets/projects/clubhub.png';
import destination from '../../assets/projects/Destination-Unknown-preview.png';
import password from '../../assets/projects/password_generator.jpeg';
import pencil from '../../assets/projects/Pencil-It-In-preview.png';

function Project(props) {
    const currentProject={
      name: 'Club Hub Kids',
      description: 'Website for after-school programs and summer camps in the Sacramento Valley.',
    }

    useEffect(() => {
        document.title=currentProject.name;
    }, [currentProject]);
    
    return (
    <section>
        <h2>My Work</h2>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='col'>
                <div className='card mb-3'>
                    <div className='card-body'>
                        <h5 className='card-title'>{currentProject.name}</h5>
                        <p className='card-text'> {currentProject.description}</p>
                        <a href={currentProject.url} />
                    </div>
                    <img 
                    src={clubhub} className='card-img-bottom img-thumbnail mx-1' 
                    alt='project preview' 
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Project;