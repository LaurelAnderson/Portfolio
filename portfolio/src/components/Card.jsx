import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";

function Card(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* project card */}
      <div class="card">
        <div class="card-body">
          {props.cardBody}
        </div>

        <div className="cardHover">
          <img src={props.imgSrc} class="card-img-bottom" alt="Price with some cats" onClick={handleShow}/>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.text}</Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Card;