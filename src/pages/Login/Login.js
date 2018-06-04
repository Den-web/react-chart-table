import React, {Component} from 'react';
import './Login.css';
import AuthService from './AuthService';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {

        return (
            <div className='backColor'>
                <div className="center">
                    <div className="card jumbotron">
                        <h1>Login From View</h1>
                        <h5>Table and Graph content</h5>
                        <form onSubmit={this.handleFormSubmit}>

                            <TextField
                                style={{ fontSize: 36 }}
                                id="name"
                                label="Name"
                                placeholder="Username goes here..."
                                name="username"
                                type="text"
                                onChange={this.handleChange}
                                margin="dense"
                            />

                            <TextField
                                style={{ fontSize: 36 }}
                                id="password"
                                label="password"
                                helperText="Full width!"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                margin="dense"
                            />
                            <span><Button
                                variant="raised" color="primary"
                                value="SUBMIT"
                                type="submit">Login</Button>
                            </span>

                            {/*<input*/}
                            {/*className="form-submit"*/}
                            {/*value="SUBMIT"*/}
                            {/*type="submit"*/}
                            {/*/>*/}
                        </form>
                        <p className="small-text">Special content </p>
                    </div>
                </div>
            </div>
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;