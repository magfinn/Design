import React, { useEffect, useState } from 'react';
import ProjectList from '../ProjectList';

function Project(props) {
    const { projects } =props;

    return (
        <section>
            <h1 data-testid='h1tag'>{projects.name}</h1>
            <p>{projects.description}</p>
            <ProjectList project = {projects.name} />
        </section>
    )
}

export default Project;