import "../styles/Home.css";
import video from "../assets/video/reel.mp4";

export default function Home() {
  return (
    <>
      <section id="Main">
        <div className="headingBox">
          <div className="topHeading">WE CRAFT</div>
          <p className="topPera">Story, Not Just Content</p>
        </div>
        <div className="main__row">
          <div className="main__col">
            <p className="main__col-pera reelText">Watch Reel</p>
            <video className="main__col-video" autoplay playsInline controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="main__col">
            <div className="main__col-color-pera">CodeLit</div>
            <h1 className="main__col-heading">
              THINKING BOLDLY.
              <br /> CRAFTING VISUALLY
            </h1>
            <p className="main__col-pera">
              Not just makers. Campaign creators. Visual disruptors.
            </p>
            <button className="fancy-button">Explore All Works</button>
          </div>
        </div>
      </section>
    </>
  );
}
