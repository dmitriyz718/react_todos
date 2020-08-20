import React, { Component } from 'react';
import CreateTodoForm from '../components/CreateTodoForm';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';

class TodosContainer extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    };

    // After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
    deleteTodo = (todo) => {
        TodoModel.delete(todo).then((res) => {
            let todos = this.state.todos.filter((todo) => {
                return todo._id !== res.data._id;
            });
            this.setState({ todos });
        });
    };

    render() {
        return (
            <div className="todosComponent">
                <CreateTodoForm
                    createTodo={this.createTodo}
                />
                <Todos
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    };
};

export default TodosContainer;
