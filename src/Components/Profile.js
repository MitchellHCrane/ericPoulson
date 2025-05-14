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
              I have been a loan officer for over 28 years which has exposed me
              to a diverse array of lending practices, including Conventional,
              FHA, VA and non-traditional lending. I am passionate about making
              sure my clients feel well-informed and comfortable every step of
              the way during their homebuying or refinancing journey. As you
              make the commitment to buy a new home, refinance your current
              mortgage, or cash out some of your home equity, I make a
              commitment to you. I will help you qualify, apply and be approved
              for the lowest cost mortgage available, and ensure that you close
              quickly and without any surprises.
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
