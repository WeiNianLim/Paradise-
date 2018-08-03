import React, { Component } from "react";

class LoginForm extends Component {

    
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.saveLogin(e.target.Name.value, e.target.Password.value)
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
            </div>
        );
    };
}

export default LoginForm;
