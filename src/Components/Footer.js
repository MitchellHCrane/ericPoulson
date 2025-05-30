import "../css/footer.css";
import "../css/App.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:801-209-1250">(801)-209-1250</a>
          </p>
          <p className="footerP">Fax: (801)-303-7083</p>
          <p className="footerP">
            Email:{" "}
            <a href="mailto:ericp@firstclasshomemortgage.com">
              ericp@firstclasshomemortgage.com
            </a>
          </p>
          {/* <div className="socialContainer">
            <a href="" className="footerP">
              <BsInstagram />
            </a>
            <a href="" className="footerP">
              <BsFacebook />
            </a>
            <a href="" className="footerP">
              <BsLinkedin />
            </a>
          </div> */}
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">Eric Poulson (NMLS #304790)</p>
          <p className="footerP">
            Regulated by State of Utah Division of Real Estate NMLS #1843
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noopener noreferrer"
            >
              10808 River Front Parkway, Suite #3035,{<br />} South Jordan, UT
              84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
