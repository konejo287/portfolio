import React, { Component } from 'react';
var normalJoke = {};

class Jokes extends Component {
    state = { joke: {} };
    normalJoke
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => {
                    console.log('this is the response', response.json());
                    return response.json();
                } 
            )

            .then(json => {
                    this.setState({ joke: json })
                }    
            );
    }

    render() {
        const { setup, punchline } = this.state.joke;

        return (
            <div>
                <h2>Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;