import React, { Component } from 'react';

export default class CatList extends Component  {

  render(){
    return (
      <div>
        {this.props.cats.map((breed) => {
            return < Cat passingCat={ breed } />
          })}
      </div>
    )
  }
}

const Cat = (props) => {
  return (
    <div>
      <p>{ props.passingCat }</p>
    </div>
  )
}

