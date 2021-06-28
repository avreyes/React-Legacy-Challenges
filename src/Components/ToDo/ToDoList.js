import React, { Component } from "react";
import ToDoItems from "./ToDoItems";

export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }


    render(){
        return(
            <div className="toDoList">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter task" />
                        <button type="submit">Add To-Do</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items} 
                            delete={this.deleteItem} />
            </div>
        );
    }
}
