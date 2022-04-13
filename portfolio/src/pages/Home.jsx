import React from "react";
import Card from "../components/Card.jsx"
import Test from "../img/test.jpg";

function Home() {
  return (
    <div className="home">
      <div className="background1">
        <div class="container px-5 ">

        <br></br>
      
          <h1>Well Hello There, </h1>

          <br></br>


          {/* <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3"> */}
          <div class="row row-cols-1 row-cols-md-2"> 
            <div className="col">
              <div>{/* Empty */}</div>
            </div>
            <div className="col">
              <div className="test2">
                <h3 className="p-4">
                I am a creative and ambitious computer scientist, passionate about 
                problem solving, team collaboration, and professional communication.
                Thank you for visiting my site!
                </h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <br></br>

      <div className="background2">
        <div class="container px-5 ">
          {/* Hightlights */}

          <h1>Highlights</h1>
          <br></br>
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

export default Home;