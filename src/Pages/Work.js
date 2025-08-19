import React from "react";

// images

import workImage1 from "../assets/secondary/our-story-image.jpg";

export default function Work() {
  document.title = "Codelit | Work";
  return (
    <>
      <section className="work">
        <p className="work__pera">Lets Take A Look.</p>
        <h1 className="work__heading">
          GET A GLIMPSE OF
          <br />
          MY SELECTED WORK
        </h1>

        <div className="work__projects">
          <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage1}
                alt="work image 1"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <h2>code was born from a simple yet powerful vision:</h2>
              <p>
                To bridge the gap between academic learning and industries
                demands. we recognise that many tallented students struggels
                from transition from theroy to.
              </p>
              <h4>
                <span>Mission :</span> Frontend Development
              </h4>
              <button className="work__btn">Explore</button>
            </div>
          </div>
          <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage1}
                alt="work image 2"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <h2>code was born from a simple yet powerful vision:</h2>
              <p>
                To bridge the gap between academic learning and industries
                demands. we recognise that many tallented students struggels
                from transition from theroy to.
              </p>
              <h4>
                <span>Mission :</span> Frontend Development
              </h4>
              <button className="work__btn">Explore</button>
            </div>
          </div>
          <div className="work__project">
            <div className="work__project-sm">
              <img
                src={workImage1}
                alt="work image 3"
                className="work__project-sm-img"
              />
            </div>
            <div className="work__project-sm">
              <h2>code was born from a simple yet powerful vision:</h2>
              <p>
                To bridge the gap between academic learning and industries
                demands. we recognise that many tallented students struggels
                from transition from theroy to.
              </p>
              <h4>
                <span>Mission :</span> Frontend Development
              </h4>
              <button className="work__btn">Explore</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
