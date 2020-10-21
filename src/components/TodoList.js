import React, {Component} from 'react';
import firebase from '../firebase';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        const todoRef = firebase.database().ref('Todo');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const todoListTempArr = []
            for (let id in todos) {
                console.log("snapshot.val() id ", id)

                todoListTempArr.push({id, ...todos[id]})
            }
            this.setState({
                todoList: todoListTempArr
            })
        })
    }

    render() {
        return (
            <>
                {this.state.todoList ? this.state.todoList.map((todo, index) => (<Todo todo={todo} key={index} />)) : ""}
            </>
        )
    }
}

export default TodoList