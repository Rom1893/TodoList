import React, { Component } from 'react'
import "../css/todo.css"

class Todo extends Component {

    state = {
        isEditing: false,
        task : this.props.task,
    }

    handleRemove = () => {
        this.props.remove(this.props.id)
    }

    toogleForm = () => {
        this.setState({ isEditing: !this.state.isEditing})
    }

    update = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.toogleForm()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToogle = () => {
        this.props.toogleCompletion(this.props.id)
    }


    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.update}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
            <div className='Todo'>
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToogle} >{this.props.task}</li>
                <div className='Todo-buttons'>
                    <button onClick={this.toogleForm}><i className='fas fa-pen' /></button>
                    <button onClick={this.handleRemove}><i className='fas fa-trash' /></button>
                </div>
            </div>
            )
        }

        return (
            result
        )
    }
}

export default Todo;
