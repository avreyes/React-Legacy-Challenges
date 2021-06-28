import React, { Component } from 'react';
import CatList from './CatList';

export default class CatIndex extends Component {
    constructor(props){
      super(props);
      this.state = {
        breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
      };
    }

render() {
  let breeds = this.state.breeds
  return (
    <div>
      <h1>Cat Breeds</h1>
      <CatList cats={breeds} />
    </div>
  );
}
}

