import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-reach">
            <h4>Reach out to us :-</h4>
            <p>Ivy knowledge services(P) Ltd.</p>
            <p>91+ 7676882222</p>
            <p>ivy@ifo.com</p>
          </div>
          <div className="social-media">
            <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <WhatsAppIcon />
          </div>
          <div className="footer-logo">
            <img
              src="https://ivyproschool.com/wp-content/uploads/2015/07/logo.jpg"
              alt=""
              width={"70px"}
            />
            <p>
              Ivy Pro School is one of the Best School to learn AI/ML master
              classes that helps student to grow-up their career.
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-col">
            <div>
              <h3>Company</h3>
              <p>About us</p>
              <p>Blogs</p>
              <p>College Ambesdor</p>
              <p>Certificate Verification</p>
              <p>Feculty Member</p>
              <p>Management Team</p>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
            </div>
            <div>
              <h3>Featured Courses</h3>
              <p>Data Science</p>
              <p>Backend</p>
              <p>Data Analyst</p>
              <p>Full Stack developer</p>
              <p>Machine Learning</p>
            </div>
            <div>
              <h3>Campus</h3>
              <p>Kolkata </p>
              <p>Bengalore</p>
              <p>Pune</p>
              <p>Mumbai</p>
              <p>New Delhi</p>
            </div>
            <div>
              <h3>Support</h3>
              <p>Contect us</p>
              <p>Help & FAQ</p>
              <p>Refund Policy</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <p className="footer-copyright">
        2023. All Rights Reserved <br />
        made with ❤ by sourabh
      </p>
    </div>
  );
};

export default Footer;
