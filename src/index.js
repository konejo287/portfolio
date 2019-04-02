import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

/*class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and i am', this.age, 'years old');
    }
}

const animal1 = new Animal('Gex', 10);
animal1.speak();

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log('roar, I have', this.furColor, 'fur, and i can run', this.speed);
    }
}

const lion1 = new Lion('Mufasa', 20, 'golden', 25);
lion1.speak();
lion1.roar();
console.log(lion1);*/
