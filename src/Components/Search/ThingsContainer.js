import React, { Component } from 'react';
import Thing from './Thing';

export default class ThingsContainer extends Component {
    render() {
        return (
            <div>
                {this.props.things.map(thing => <Thing thing = {thing}/>)}
            </div>
        )
    }
}