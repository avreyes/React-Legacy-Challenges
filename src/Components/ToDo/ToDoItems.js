import React,  { Component } from 'react';

export default class ToDoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key} style={{cursor: 'pointer'}}>{item.text}</li>
    }
    render() {
        let toDoEntries = this.props.entries;
        let listItems = toDoEntries.map(this.createTasks);

        return(
            <ul className="list">
                {listItems}
            </ul>
        )
    }
}