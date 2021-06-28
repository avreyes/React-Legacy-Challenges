import React, { Component } from 'react'

export default class Thing extends Component {
    render() {
        return(
            <div>
                {this.props.thing}
            </div>
        )
    }
}