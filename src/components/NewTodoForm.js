import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "../css/newTodoForm.css"

class NewTodoForm extends Component {

    state = { task: "" }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false});
        this.setState({task: ""});
    }

    render() {

        return (
            <form className='NewTodoForm' onSubmit={this.submitForm}>
                <label htmlFor='task'>Task</label>
                <input
                    id='task'
                    name='task'
                    placeholder='task'
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                ></input>


                <button>Add new todo</button>
            </form>
        )
    }
}

export default NewTodoForm;
