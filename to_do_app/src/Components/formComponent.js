import React, { Component } from 'react';

class formComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks_: []
        }
        this.inputRef = React.createRef()
        this.removeTask = this.removeTask.bind(this)
    }

    addTask = () => {
        let task = this.inputRef.current.value
        this.inputRef.current.value = '';
        if (task !== '') {
            this.setState(function(state) {
                return {
                    tasks_: state.tasks_.concat([task])
                };
            })
        }
    }

    removeTask = (index) => {
        let indexToRemove = index.index;
        if (this.state.tasks_.length === 1) {
            this.setState(function(state) {
                return {
                    tasks_: []
                };
            })
        } else {
            this.setState(function(state) {
                return {
                    tasks_: state.tasks_.slice(0, indexToRemove).concat(state.tasks_.slice(indexToRemove + 1, ))
                };
            })
        }
    }

    render() {
        return ( <div>
            <div>
            <input type = "text"
            placeholder = "Enter task"
            ref = { this.inputRef }
            /> 
            <button className = "add-task-button"
            onClick = { this.addTask } > ADD </button> 
            </div>          
            <ul className = "task-list" > {
                (this.state.tasks_).map((name, index) =>
                    <li className = "Task-div" key = { index } >
                    <p>&bull; { name } </p> 
                    <button className = "btn" onClick = { () => this.removeTask({ index: index }) }> <i className = "fa fa-trash" > </i></button >
                    </li> )		 	 
                } 
            </ul>    
        </div>
            )
        }
    }

    export default formComponent