import React from "react";
import linkedin from "../../assets/social-icons/linkedin_icon.png";
import github from "../../assets/social-icons/github_icon.png";
import instagram from "../../assets/social-icons/instagram_icon.png";
import whatsapp from "../../assets/social-icons/whatsapp_icon.png";
function Footer() {
  return (
    <section className="pm-0">
      <div className="footer">
        <div className="footer-text">© 2023. All rights reserved by <span>Abhishek Nale</span></div>
        <div className="connect">
          <p>Connect with me</p>
          <div className="social-links">
            <a href="">
              <img src={github} alt="github" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="">
                <button className="button">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
