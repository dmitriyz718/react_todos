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

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        TodoModel.all().then((res) => {
            this.setState({
                todos: res.data.todos,
            });
        });
    };

    createTodo = (todo) => {
        let newTodo = {
            body: todo,
            completed: false,
        };

        TodoModel.create(newTodo).then((res) => {
            let todos = this.state.todos;
            todos.push(res.data);
            this.setState({ todos: todos });
        });
    };

    rrender() {
        return (
            <div className="todosContainer">
                <CreateTodoForm
                    createTodo={this.createTodo} />

                <Todos
                    todos={this.state.todos} />
            </div>
        );
    };
};

export default TodosContainer;
