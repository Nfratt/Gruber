import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AcctBttn } from '../createAcct';
// import { ForgotBtn } from './ForgotPassword';
import axios from "axios";
import { connect } from 'react-redux';
import Login from '../login'

export function Loginbtn() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button
          className="navitem2"
          variant="warning"
          onClick={() => setModalShow(true)}
          
        >
          Login <i className="fas fa-shopping-cart"></i>
        </Button>
  
        <Login show={modalShow} onHide={() => setModalShow(false) } onLoginModal={setModalShow}/>
      </ButtonToolbar>
    );
  }