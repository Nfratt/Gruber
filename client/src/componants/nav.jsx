import {Nav,} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartBtn } from "./cart";
import {  Loginbtn } from "./login";
import { EditBtn } from "./editAcct"
import Logo from "./images/Gruberlogo.png";


export default function Navbar(props){
    return(
<Nav className="justify-content-end" id="navbkrd" defaultActiveKey="/home">
<img className="logo" src={Logo} alt="Gruberlogo logo" />
    <Loginbtn className="navitem"/>
    <CartBtn className="navitem"/>
</Nav>
    )
}