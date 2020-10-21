import Form from "./Form";
import React, {Component} from 'react';
import firebase from '../firebase';
import '../App.css'

const Todo = ({todo}) => {

    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    }

    const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
            complete: !todo.complete
        });
    }

    return (
        <>
            <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
            <button onClick={deleteTodo}>delete</button>
            <button onClick={completeTodo}>complete</button>
        </>
    )
}

export default Todo;