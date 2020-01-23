import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class CreateAcct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirm: '',
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };
  userStorage = async event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordConfirm,
	} = this.state;
	console.log(password);
	console.log(passwordConfirm);
	//if passwords match

	//then save the password hash to the database one time as "password"
    try {
      const response = await axios.post('/api/auth/signup', {
        firstName,
        lastName,
        username,
        email,
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="acctCreate">
            <h3 className="panel-title">
              Sign up for Gruber <small>Yummmm!</small>
            </h3>
          </div>
          <form onSubmit={this.userStorage} style={{ alignItems: 'center' }}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control input-sm"
                  placeholder="First Name"
                />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control input-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="form-control input-sm"
              placeholder="Email Address"
            />
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="form-control input-sm"
              placeholder="Username"
            />
            <br />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control input-sm"
                  placeholder="Password"
                />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="form-control input-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <br />
            <input
              type="submit"
              value="Register"
              className="btn btn-info btn-block"
            />
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
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
