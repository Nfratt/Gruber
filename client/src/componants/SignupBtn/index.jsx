import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AcctBttn } from './createAcct';   
// import { ForgotBtn } from './ForgotPassword';
import axios from "axios";
import { connect } from 'react-redux';
import Login from '../login'


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