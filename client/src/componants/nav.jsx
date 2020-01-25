import {Nav,} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartBtn } from "./cart";
import {  Loginbtn } from "./Loginbtn";
import Logo from "./images/Gruberlogo.png";
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import {onLogout} from '../redux/actions'


// import { STATES } from 'mongoose';




function Navbar(props){
    return(
<Nav  id="navbkrd" defaultActiveKey="/home">
<img className="logo" src={Logo} alt="Gruberlogo logo"></img>
    {!props.user.isLoggedIn ? <Loginbtn className="navitem"/>: <Button className="logout" onClick={props.onLogout}>  logout</Button>}
    <CartBtn className="navitem"/>
    {/* <SignupBtn className='navitem'></SignupBtn> */}
</Nav>
    )
}
const mapStateToProps =(state) => ({user:state.user})
export default connect (mapStateToProps, {onLogout})(Navbar)