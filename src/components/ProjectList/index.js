import React from 'react';
import Project from "../Project";

const projects = [
    {
        title: 'Destination Unknown: Roadtrip Planner',
        description: 'Roadtrip Planning App',
        link: "https://khanhlam90.github.io/destination-unknown/"
    },
    {
        title: 'Club Hub Kids',
        description: 'Database of Sacramento-based preschool-grade 12 after-school activities, teams and clubs.',
        link: "https://clubhubkids.herokuapp.com/"
    },
    {
        title: 'Javascript Randomized Password App',
        description: 'Web-based tool to generate random passwords',
        link: "https://magfinn.github.io/Randomized-Password-Application/"
    },
    {
        title: 'Pencil It In',
        description: 'Website with daily planner',
        link: "https://magfinn.github.io/Pencil-It-In/"
    }
]
    

function ProjectList() {
    return (
        <div>
            <h1>Portfolio</h1>

            <Project projects={projects} />

        </div>
    );
}

export default ProjectList;