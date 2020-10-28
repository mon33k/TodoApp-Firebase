import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Redirect} from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import LogOut from './components/LogOut';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser(user) {
    this.setState({
      user: user
    })
  }

  handleLoginUser = () =>{
    const { user } = this.state

    if(user) {
      return <Redirect to={{pathname: `/profile/${user.username}`}} />
    } else {
      return <Login setCurrentUser={this.setCurrentUser}/>
    } 
  }

  handleSignUpUser = () => {
    const { user } = this.state

    if(user) {
      return <Redirect to={{pathname: `/profile/${user.username}`}} /> 
    } else {
      return <SignUp setCurrentUser={this.setCurrentUser} /> 
    }
  }

  handleUserProfile = () => {
    const {user} = this.state

    if(user) {
      return <Profile />
    } else {
      return <Redirect to="/"/>
    }
  } 


  render(){
    const {user} = this.state
    return (
      <div className="App">
        <NavBar user={user}/>
        <Switch> 
          <Route path="/" exact component={LandingPage}/>
          <Route path="/login" component={this.handleLoginUser}/>
          <Route path="/logout" component={LogOut} /> 
          <Route path="/signup" component={this.handleSignUpUser} />
          <Route path="/profile/:username" component={this.handleUserProfile}/> 
        </Switch>
      </div>
    );
  }
  
}

export default App;
