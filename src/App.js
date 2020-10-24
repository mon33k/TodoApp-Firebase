import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Redirect} from 'react-router-dom';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  setCurrentUser(user) {
    this.setState ({
      user: user
    })
  }

  handleLoginUser =() =>{
    const { user } = this.state
    console.log("the user ", user)
    if(user) {
      return <Redirect to="/profile/:uid"/>
    } else {
      return <Login setCurrentUser={this.setCurrentUser}/>
    }
  }

  handleSignUpUser = () => {
    const { user } = this.state

    if(user) {
      return <Redirect to="/profile/:uid"/>
    } else {
      return <SignUp setCurrentUser={this.setCurrentUser} /> 
    }
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        
        {/* <Form/>
        <TodoList /> */}
  
        <Switch>
          <Route path="/login" component={this.handleLoginUser}/>
          <Route path="/signup" component={this.handleSignUpUser} />
          <Route path="/profile/:uid" component={Profile} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
