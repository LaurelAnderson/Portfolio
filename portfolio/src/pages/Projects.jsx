import React from "react";

import Card from "../components/Card.jsx"
import Test from "../img/test.jpg";

function Projects() {
  return (
    <div className="projects">
      <div class="container">
        <div className="content">
          <h1>Projects</h1>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3">
            <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div>
            <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div>
            <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;