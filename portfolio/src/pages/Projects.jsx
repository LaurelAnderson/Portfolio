import React, { useState, useEffect } from "react";

import Card from "../components/Card.jsx"
import Test from "../img/test.jpg";

import { API } from 'aws-amplify';
import { listProjects } from '../graphql/queries';

const initialFormState = { name: '', description: '' }

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
  }, []);

  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects });
    setProjects(apiData.data.listProjects.items);
    console.log(projects)
  }

  return (
    <div className="projects">
      <div class="container">
        <div className="content">

          <h1>Projects</h1>
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3">

            {projects.map((item) => {
              <div class="col">
                <Card imgSrc={Test} cardBody={item.name} text={item.description}/>
              </div>
            })}
            
            {/* <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div>
            <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div>
            <div class="col">
              <Card imgSrc={Test} cardBody="This is some text within a card body." text="Hello,you're reading this text in a modal!"/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;