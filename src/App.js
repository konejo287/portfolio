import React , {Component } from 'react';
import Projects from './Projects';

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
                <h1>This is the main content</h1>
                { bio }
                <hr />
                <Projects />
            </div>
        )
    }
}

export default App;