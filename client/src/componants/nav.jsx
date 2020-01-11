import {Nav,} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartBtn } from "./cart";
import {  Loginbtn } from "./login";


export default function Navbar(props){
    return(
<Nav className="justify-content-end" id="navbkrd" defaultActiveKey="/home">
    <Loginbtn className="navitem"/>
    <CartBtn className="navitem"/>
</Nav>
    )
}