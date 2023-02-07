import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ListGroup from 'react-bootstrap/ListGroup';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';






function Restop({op}) {




  console.log(op);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div><br/>
      <Button variant="primary" onClick={handleShow}> 
      OPENING HOURS :
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OPENING HOURS</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem noBorders className='px-3 mb-2 rounded-3'>
        Monday :{op.Monday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='primary' className='px-3 mb-2 rounded-3'>
      Tuesday :{op.Tuesday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='secondary' className='px-3 mb-2 rounded-3'>
      Wednesday :{op.Wednesday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='success' className='px-3 mb-2 rounded-3'>
      Thursday :{op.Thursday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='danger' className='px-3 mb-2 rounded-3'>
      Friday :{op.Friday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='warning' className='px-3 mb-2 rounded-3'>
      Saturday :{op.Saturday}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='info' className='px-3 mb-2 rounded-3'>
      Sunday :{op.Sunday}
      </MDBListGroupItem>
     
    </MDBListGroup>

       
  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop