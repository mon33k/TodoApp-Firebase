import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state ={ 
            email: "",
            password: ''
        }
    }

    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        const {email, password} = this.state
        return(
            <>
            <div>Login</div>
            <form>
                <label for="email">
                    Email: 
                    <input id="email" name="email" type="text" placeholder="email" value={email} onChange={this.handleInputChange}/>
                </label>
                <br></br>
                <label for="password">
                    Password: 
                    <input id="password" name="password" type="text" placeholder="password" value={password} onChange={this.handleInputChange}/>
                </label>
            </form>
            </>
        )
    }
}

export default Login;