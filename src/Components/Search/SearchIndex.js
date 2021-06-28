import React, { Component } from 'react';
import {Input} from 'reactstrap';
import ThingsContainer from './ThingsContainer';

export default class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: 
        ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: ''
    };
  };

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.things.filter(thing => thing.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return(
    <div>
      <input type="text" value={this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = "Search for Things..." />
      <button type="submit">Search</button>
      <h3>Results:</h3>
      <ThingsContainer things = {this.dynamicSearch()}/>
    </div>
    );
  }  
}
