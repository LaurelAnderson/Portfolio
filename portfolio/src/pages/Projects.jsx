import React from "react";

import Card from "../components/Card.jsx"
import Test from "../img/test.jpg";

function Projects() {
  return (
    <div className="projects">
      <div class="container">
        <h1>Projects</h1>

          <Card imgSrc={Test} text="Hello,you're reading this text in a modal!"/>

      </div>
    </div>
  );
}

export default Projects;