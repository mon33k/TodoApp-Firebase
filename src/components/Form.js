import React, {Component} from 'react';
import firebase from '../firebase';

class Form extends React.Component {
    constructor(){
        super()
        this.state ={
            title: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.createTodo = this.createTodo.bind(this)
    }

    handleInputChange(e) {
    this.setState({
        title: e.target.value
        })
    }

    createTodo(e) {
        e.preventDefault();
        const todoRef = firebase.database().ref('Todo');
        console.log("todoRef -->", todoRef.uid)
        const todo = {
            title: this.state.title,
            complete: false,
        };
    
        todoRef.push(todo);
        console.log('submitted')
    }


    render(){
        return(
            <>
                <form>
                    <input type="text" value={this.state.title} placeholder="Enter todo here" onChange={this.handleInputChange} ></input>
                    <button type="submit" onClick={this.createTodo}>Submit Todo</button>
                </form>
            </>
        )
    }
}

export default Form;