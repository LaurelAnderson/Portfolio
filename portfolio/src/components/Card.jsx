import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";

function Card(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    {/* Put this in a separate component */}
    <div class="card" style={{width: '18rem'}}>
      <div class="card-body">
        This is some text within a card body.
      </div>
      <img src={props.imgSrc} class="card-img-bottom" alt="Price with some cats" onClick={handleShow}/>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
      </Modal>
    </div>
    {/* End of component */}
    </div>
  );

}

export default Card;