import React from 'react';
import photo from '../../assets/projects/clubhub.png';

function Project(props) {
    const currentProject = {
        name: 'Club Hub Kids',
        description: 'Website for after-school programs and summer camps in the Sacramento Valley.',
    };
    return (
        <section>
            <h1>(currentProject.name)</h1>
            <p>{currentProject.name}</p>
            <div>
                <img
                src={photo}
                alt="After school programs app"
                className='img-thumbnail mx-1'
                />
            </div>
        </section>
    );
};

export default Project;