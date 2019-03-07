import React , {Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        const { title, image, desc, link } = this.props.project;

        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt='profile' />
                <p>{desc}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted projects</h2>
                <div>
                    <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;