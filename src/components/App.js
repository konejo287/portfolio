import React , {Component } from 'react';
import Projects from './Projects';
import Social_Proyects from './Social';
import profilePic from '../assets/profile.png';
import Title from './Title';

class App extends Component {

    /*constructor() {
        super();
        this.state = {displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }*/

    state = { displayBio: false }; 

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render () {
        const bio = this.state.displayBio ? (
            <div>
                My name is mario
                <button onClick={this.toggleDisplayBio}>More info</button>   
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>More info</button>   
            </div>
        );

        return (
            <div>
                <img src={profilePic} alt='profile' className='profile' />
                <h1>This is the main content</h1>
                { this.state.displayBio ? <Title /> : null }
                { bio }
                <hr />
                <Projects />
                <hr />
                <Social_Proyects />
            </div>
        )
    }
}

export default App;