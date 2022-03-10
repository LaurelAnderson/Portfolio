import React from "react";
import '../homeStyle.css'

function Home() {
  return (
    <div className="home">
      <div className="background">
        <div class="container">
          <div className="content">
            <h1>Home</h1>
            <p>
              this is the home page
            </p>
          </div>
          <div className="right">
            <p>
              content content content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;