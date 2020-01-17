import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AcctBttn} from "./createAcct"
export function Login(props) {
 return (
   <Modal

     {...props}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
      Sign In
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>

     <div className="login">
        <div className="row centered-form login">
        <div className="col-lg-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default login">
        		<div className="panel-heading login">
			    		<h3 className="panel-title login">Sign into Gruber <small>Yummmm!</small></h3>

			 			</div>
			 			<div className="panel-body login">
			    		<form role="form login">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input type="text" size="lg" name="e-mail" id="e-mail" className="form-control input-lg" placeholder="e-mail"/>
			    					</div>
			    				</div>
			    			</div>
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group justify-content-center">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    			</div>
			    			<input type="login" value="Login" className="btn btn-info btn-block"/>
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



