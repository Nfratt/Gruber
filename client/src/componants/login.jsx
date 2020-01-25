import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AcctBttn } from './createAcct';
import { ForgotBtn } from './ForgotPassword';
import axios from "axios";
import { connect } from 'react-redux';
import {onLogin} from '../redux/actions'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };
  userStorage = async event => {
    event.preventDefault();
    const { username, password } = this.state
    try {

        const response = await axios.post("/api/auth/login", { username, password });
        console.log(response);
        console.log(response.data);
        this.props.onLoginModal(false)
        this.props.onLogin(response.data.tokens)
    } catch (err) {
        console.log('error:', err);
    }
    
  }
  render() {
    const { props } = this
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={this.userStorage} style={{alignItems: "center"}}>
            <h3 className="panel-title login">
              Sign into Gruber! <small>Yummmm!</small>
            </h3>
            <br></br>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    size="lg"
                    name="username"
                    id="username"
                    className="form-control input-lg"
                    placeholder="username"
                    style={{width: "90%"}}
                  />
                  <br></br>
                  <input
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    className="form-control input-sm"
                    placeholder="Password"
                    style={{width: "90%"}}
                  />
                  <br></br>
            <input
              type="submit"
              value="Login"
              className="btn btn-info btn-block"
              style={{width: "90%"}}
            />
          </form>
        </Modal.Body >
      <Modal.Footer>
        <AcctBttn />
        <ForgotBtn />
      </Modal.Footer>
      </Modal >
    );
  }
}

export default connect(null, {onLogin})(Login)




