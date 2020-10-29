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
        this.getAllTodos()
    }

    getAllTodos() {
        const todoRef = firebase.database().ref('Todo');
        console.log("user in todolist -> ", this.props.user)
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const todoListTempArr = []
            for (let id in todos) {
                // console.log("snapshot.val() id ", id)
                // console.log("each todo userid -> ", todos[id].userid)
                if(todos[id].userid === this.props.user.userid) {
                    todoListTempArr.push({id, ...todos[id]})
                }
            }

            console.log("temparr    ", todoListTempArr)
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