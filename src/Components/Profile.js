import "../css/profile.css";
import "../css/App.css";
import React from "react";

function Profile() {
  return (
    <div className="profile-background">
      <div className="profile-div">
        <div className="profile-grid">
          <div className="columnPic">
            <img
              className="headProfilePic"
              src="../images/headshot.jpg"
              alt="Eric Poulson Loan Originator"
            />
          </div>
          <div>
            <h1 className="profileName">Eric Poulson</h1>
            <h2 className="NMLS">Loan Originator (NMLS #304790)</h2>
            <p className="profileP">
              I&apos;m Eric, I look forward to helping you along your home
              buying experience. I&apos;ve provided a few useful links to get
              you started.
            </p>
            <div className="buttonBlueDiv">
              <a href="#getStarted" className="buttonBlue">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
