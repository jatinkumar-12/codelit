export default function Home() {
  return (
    <>
      <section id="Main">
        <div className="headingBox">
          <div className="topHeading">
            <span>WE CRAFT</span>
          </div>
          <p className="topPera">
            <span>Story, Not Just Content</span>
          </p>
        </div>
        <div className="main__row">
          <div className="main__col">
            <p className="main__col-pera">Watch Reel</p>
            <video
              id="myVideo"
              className="main__col-video"
              autoplay
              playsInline
              loop
            >
              <source src="assets/video/reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="main__col">
            <div className="main__col-color-pera">
              <span>CodeLit</span>
            </div>
            <h1 className="main__col-heading">
              <span>THINKING BOLDLY.</span>
              <span> CRAFTING VISUALLY</span>
            </h1>
            <p className="main__col-pera">
              <span>
                {" "}
                Not just makers. Campaign creators. Visual disruptors.
              </span>
            </p>
            <button className="fancy-button">Explore All Works</button>
          </div>
        </div>
      </section>
    </>
  );
}
