import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "../css/todoList.css"


class TodoList extends Component {
    
    state = {
        todos:[]
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove = (id) => {  
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(m => {
            if (m.id === id){
                return {...m, task: updatedTask}
            }
            return m;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    toogleCompletion = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(m => {
            if (m.id === id){
                return {...m, completed: !m.completed}
            }
            return m;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
         const list = this.state.todos.map(m => {
            return <Todo 
            id={m.id} 
            key={m.id} 
            task={m.task}
            completed={m.completed}
            remove={this.remove} 
            updateTodo={this.update}
            toogleCompletion={this.toogleCompletion}
             />
         })

        return (
            <div className="TodoList">
                <h1>Todo List!</h1>
                <ul>{list}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;
