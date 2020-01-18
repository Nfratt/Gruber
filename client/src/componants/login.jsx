import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AcctBttn } from './createAcct';
import { ForgotBtn } from './ForgotPassword';
import axios from "axios";

export class Login extends Component {
  state = {username: "", password: ""};
  handleChange = event => {
    const { name, value } = event.target;
    this.setState ({[name]: value});
    console.log(name, value);
  };
  userStorage = async event => {
    event.preventDefault();
    const {username, password} = this.state
    const {data} = await axios.post("/api/auth/login", {username, password});
    console.log(data);
  }
  render() {
    const {props} = this
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="login">
            <div className="row centered-form login">
              <div className="col-lg-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div className="panel panel-default login">
                  <div className="panel-heading login">
                    <h3 className="panel-title login">
                      Sign into Gruber <small>Yummmm!</small>
                    </h3>
                  </div>
                  <div className="panel-body login">
                    <form role="form login" onSubmit={this.userStorage}>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input
                              onChange={this.handleChange}
                              type="text"
                              size="lg"
                              name="username"
                              id="username"
                              className="form-control input-lg"
                              placeholder="username"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group justify-content-center">
                            <input
                              onChange={this.handleChange}
                              type="password"
                              name="password"
                              id="password"
                              className="form-control input-sm"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-info btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <AcctBttn />
          <ForgotBtn />
        </Modal.Footer>
      </Modal>
    );
  }
}
export function Loginbtn() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button
        className="navitem2"
        variant="warning"
        onClick={() => setModalShow(true)}
      >
        Login <i class="fas fa-shopping-cart"></i>
      </Button>

      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </ButtonToolbar>
  );
}
