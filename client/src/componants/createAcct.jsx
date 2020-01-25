import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
//import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { ForgotBtn } from './ForgotPassword';
import { Loginbtn } from './Loginbtn'



export class CreateAcct extends Component {
  state = { firstName: '', lastName: '', username: '', password: '' };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };
  userStorage = async event => {
    event.preventDefault();
    const { username, password, firstName, lastName } = this.state;
    const { data } = await axios.post('/api/auth/signup', {
      username,
      password,      
  });
  console.log(data)
	//if passwords match

	//then save the password hash to the database one time as "password"
    try {
      const response = await axios.post('/api/auth/signup', {
        firstName,
        lastName,
        username,
        password,
      });
      console.log(response);
      console.log(response.data);
      this.props.onLogin(false);
    } catch (err) {
      console.log('error:', err);
    }

  };
  render() {
    const { props } = this;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="acctCreate">
            <div className="row centered-form">
              <div className="col-lg-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Sign up for Gruber <small>Yummmm!</small>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.userStorage}>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              className="form-control input-sm"
                              placeholder="First Name"
                              onChange={event => this.handleChange(event)}
                            />
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              className="form-control input-sm"
                              placeholder="Last Name"
                              onChange={event => this.handleChange(event)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          size="lg"
                          name="username"
                          id="username"
                          className="form-control input-lg"
                          placeholder="username"
                          onChange={event => this.handleChange(event)}
                        />
                      </div>
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control input-sm"
                              placeholder="Password"
                              onChange={event => this.handleChange(event)}
                            />
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="password"
                              name="password_confirmation"
                              id="password_confirmation"
                              className="form-control input-sm"
                              placeholder="Confirm Password"
                              onChange={event => this.handleChange(event)}
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Register"
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
          <Loginbtn />
        </Modal.Footer>
      </Modal>
    );
  }
}
export function AcctBttn() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Account <i className="fas create-account"></i>
      </Button>
      <CreateAcct show={modalShow} onHide={() => setModalShow(false)} />
    </ButtonToolbar>
  );
}
