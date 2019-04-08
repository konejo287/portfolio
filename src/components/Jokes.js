import React, { Component } from 'react';
var normalJoke = {};

class Jokes extends Component {
    state = { joke: {}, jokes: [] };
    normalJoke
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then((response) => {
                    let json = response.json().then(json => {
                            this.setState({ jokes: json })
                        }
                    );
            })

            // Otra manera de 'chainear' las promesas. Debido a que 'response.json'
            // regresa una promesa.
            /*.then((json) => {
                    this.setState({ jokes: json })
                }
            )*/
    }

    render() {
        const { setup, punchline } = this.state.jokes;
        console.log('rendering the json: ' , this.state.jokes)
        return (
            <div>
                <h2>Jokes</h2>
                {
                    this.state.jokes.map(joke => (
                        <p key={joke.id}>{joke.setup} <em>{joke.punchline}</em></p>
                    ))
                }
            </div>
        )
    }
}

export default Jokes;