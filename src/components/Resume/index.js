import React from 'react';
import resume from '../../assets/index.jpeg';

function Resume() {
    return (
        <div className="flex">
            <div className="skills">
                <h1 >Skills</h1>
                <ul>
                    <li>HTML, CSS, Javascript,</li>
                    <li>JQuery, SQL, Sequalize, NoSQL, IndexedDB</li>
                    <li>Bootstrap, Bulma, React.Bootstrap</li>
                    <li>React, Node.js, Express.js</li>
                    <li>MongoDB, Mongoose</li>
                    <li>APIs REST / RESTFUL APIs</li>
                    <li>Repositories: Git</li>
                </ul>
            </div>

            <div className="resume">
                <h1>Resume coming soon!</h1>
                <a
                    className=""
                    href={ resume }
                    download
                    target="blank"
                >
                    <button>Download</button>
                </a>
            </div>
        </div>
    );
}

export default Resume;