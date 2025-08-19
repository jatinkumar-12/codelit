import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="Footer">
        <div className="footerLinkBox">
          <h2 className="footerLinkHeading">REACH ME AT</h2>
          <a href="#" className="footerlink">
            email@codelit.in
          </a>
          <h2 className="footerLinkHeading">CAREERS</h2>
          <a href="#" className="footerlink">
            Careers@codelit.in
          </a>
        </div>
        <div className="footerLinkBox">
          <h2 className="footerLinkHeading">SERVICES</h2>
          <a href="#" className="footerlink">
            C , C++
          </a>
          <a href="#" className="footerlink">
            Graphic Design
          </a>
          <a href="#" className="footerlink">
            Web Development{" "}
          </a>
          <a href="#" className="footerlink">
            UX/UI Design
          </a>
          <a href="#" className="footerlink">
            Video Editing
          </a>
        </div>
        <div className="footerLinkBox">
          <h2 className="footerLinkHeading">FOLLOW US ON</h2>
          <div>
            <a href="#" className="footerlink">
              Instagram
            </a>
            <a href="#" className="footerlink">
              X/Twitter
            </a>
            <a href="#" className="footerlink">
              Linkedin
            </a>
          </div>
        </div>
        <div className="footerLinkBox">
          <a href="#Navbar" className="arrow-circle">
            <span className="arrow-up">↑</span>
          </a>
        </div>

        <p className="pera">© CodeLit 2025</p>
      </footer>
    </>
  );
}
