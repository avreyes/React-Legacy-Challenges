import React, { Component, setState } from 'react';


export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: [''],
        }
    }

    getImage = () => {
        this.setState((state) => ({
            ...state,
            imgURL:
            ['https://images.dog.ceo/breeds/terrier-border/n02093754_3442.jpg', ...state.imgURL]
        }));
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(dog => {

            console.log(dog.message);
            this.setState((state) => ({
                ...state,
                imgURL: [dog.message, ...state.imgURL]
            }));

            console.log(this.state.imgURL);
        })
    }

    componentDidMount() {
        this.getImage();
        console.log('mount')
    }

    render() {
        return(
            <div classNamme='Dogs'>
                <div className='Pup'>
                    <img src={this.state.imgURL[0]} alt='dog' />
                </div>
                <h2>Random Dog Image</h2>
                <div className='btns'>
                    <button className='btn' onClick={this.getImage}>Random Doggie</button>
                </div>
            </div>
        )
    }
}