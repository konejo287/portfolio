import React , {Component } from 'react';
import PROJECTS from './data/projects';

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
                                <div key={PROJECT.id}>{PROJECT.title}</div>
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