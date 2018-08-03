import React, { Component } from "react";
import { Redirect } from 'react-router'

class LoginForm extends Component {

    state = {
        nextPage: false
    }
    
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.saveLogin(e.target.Name.value, e.target.Password.value)
                    this.setState({
                        nextPage: true
                    })
                }} className='searchForm' autoComplete="off">
                    <div className='row text-left'>
                        <div className='col-2 offset-4'>
                            Name:
                <input type="text" name="Name" required />
                        </div>
                        <div className='col-2'>
                            Password:
                <input type="password" name="Password" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                {this.state.nextPage && <Redirect to='/form' />}
            </div>
        );
    };
}

export default LoginForm;
