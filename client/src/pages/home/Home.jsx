import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Feature from "../../components/feature/Feature";
import Partner from "../../components/partner/Partner";
import Endorsed from "../../components/endorsed/Endorsed";
import Form from "../../components/form/Form";
import Slider from "../../components/slider/Slider";
import Carousel from "../../components/carousel/Carousel";
import "./home.css";
import Events from "../../components/events/Events";
import FreAskedQue from "../../components/freAskedQue/FreAskedQue";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const data = [
    {
      name: "John Doe",
      position: "CEO",
      img: "https://i.pravatar.cc/150?img=1",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      img: "https://i.pravatar.cc/150?img=2",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bob Johnson",
      position: "Developer",
      img: "https://i.pravatar.cc/150?img=3",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "John Doe",
      position: "CEO",
      img: "https://i.pravatar.cc/150?img=1",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      img: "https://i.pravatar.cc/150?img=2",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bob Johnson",
      position: "Developer",
      img: "https://i.pravatar.cc/150?img=3",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Feature />
      <Partner />
      <Endorsed />
      <Form />
      <div className="checkout-testimonial">
        <div className="checkout-testimonial-text">
          <h2>Our Students are Our Brand Ambassadors </h2>
          <p style={{ width: "35%", margin: "auto", paddingBottom: "24px" }}>
            Our Alumi profits speaks our Success Story. Investing in Uplifting
            the learners, results in fundamentally Strong career for them.
          </p>
        </div>
        <Slider />
      </div>

      <div className="checkout-testimonial">
        <div className="checkout-testimonial-text">
          <h2>When Learners pour their heart out :) </h2>
          <p>
            It feels good when the effort we put is well received at the
            learner's end.
          </p>
        </div>
        <Carousel data={data} />
        <Carousel data={data} />
      </div>
      <Events />
      <FreAskedQue />
      <Footer />
    </div>
  );
};

export default Home;
