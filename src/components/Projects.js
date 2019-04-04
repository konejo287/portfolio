import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const { title, image, desc, link } = props.project;

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt='profile' />
            <p>{desc}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

const Projects = () => (                   // ( )  sinonimo de tener 'return', se reemplazo por las '{}'
    <div>
        <h2>Highlighted projects</h2>
        <div>
            <div>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} />
                    )
                )
            }
            </div>
        </div>
    </div>
)

export default Projects;