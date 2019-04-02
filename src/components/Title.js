import React, { Component } from 'react';

const TITLES = [
    'bla bla',
    'mas bla bla'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('this component has mounted');

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('unmount');

        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = this.state.titleIndex + 1;

            this.setState({ titleIndex });
        }, 4000);
    }

    render () {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am { title }</p>
        );
    }
}

export default Title;