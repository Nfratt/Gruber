import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AcctBttn} from "./createAcct"
export function Login(props) {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Modal heading
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>

     <div className="container">
        <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default">
        		<div className="panel-heading">
			    		<h3 className="panel-title">Sign into Gruber <small>Yummmm!</small></h3>
			 			</div>
			 			<div className="panel-body">
			    		<form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input type="text" name="e-mail" id="e-mail" className="form-control input-sm" placeholder="e-mail"/>
			    					</div>
			    				</div>
			    			</div>
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    			</div>
			    			<input type="login" value="Register" className="btn btn-info btn-block"/>
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>

     </Modal.Body>
     <Button>submit</Button>
     <Modal.Footer>
       <Button onClick={props.onHide}>Close</Button>
       <AcctBttn/>
     </Modal.Footer>
   </Modal>
 );
}
export function Loginbtn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button className="navitem2" variant="warning" onClick={() => setModalShow(true)}>
       Login <i class="fas fa-shopping-cart"></i>
     </Button>

     <Login
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



