import React from "react";
import Card from "../components/Card.jsx"
import Test from "../img/test.jpg";

function Home() {
  return (
    <div className="home">
      <div className="background1">
        <div class="container p-5">
      
          <h1>Well Hello There, </h1>

          <br></br>

              <div className="card shadow float-end w-100 w-md-40">
                <h2 className="p-4 m-3 ">
                My name is Laurel Anderson and I'm glad you're here! I am a creative 
                and ambitious computer scientist, passionate about 
                problem solving, team collaboration, and professional communication.
                </h2>
              </div>
          
        </div>
      </div>

      <br></br>

      <div className="background2">
        <div class="container p-5">
          {/* Hightlights */}

          <h1>Highlights</h1>
          <br></br>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
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

export default Home;