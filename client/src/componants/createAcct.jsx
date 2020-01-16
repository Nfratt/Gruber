import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CreateAcct(props) {
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
<div className="container">
        <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default">
        		<div className="panel-heading">
			    		<h3 className="panel-title">Sign up for Gruber <small>Yummmm!</small></h3>
			 			</div>
			 			<div className="panel-body">
			    		<form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"/>
			    			</div>

			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"/>
			    					</div>
			    				</div>
			    			</div>
			    			
			    			<input type="submit" value="Register" className="btn btn-info btn-block"/>
			    		
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={props.onHide}>Close</Button>
     </Modal.Footer>
   </Modal>
 );
}
export function AcctBttn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button variant="primary" onClick={() => setModalShow(true)}>
       Create Account <i className="fas create-account"></i>
     </Button>

     <CreateAcct
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



