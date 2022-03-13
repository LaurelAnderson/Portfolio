import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

import Test from "../img/test.jpg"

function Projects() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="projects">
      <div class="container">
        <h1>Projects</h1>

        {/* Put this in a separate component */}
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            This is some text within a card body.
          </div>
          <img src={Test} class="card-img-bottom" alt="Price with some cats" onClick={handleShow}/>

          {/* Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
          </Modal>
        </div>

      </div>
    </div>
  );
}

export default Projects;