import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./slicer.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
};
const Slider = () => {
  const banner = [
    {
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
      hike: "150% Hike",
      name: "Ayush singh",
      position: "System Analyst",
      fromCompany:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oAowvaGE6k-h2pvOJSsY6aakY68LNQg0XUQ1phiD&s",
      toCompany:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },

    {
      img: "https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp",
      hike: "150% Hike",
      name: "Ayush singh",
      position: "System Analyst",
      fromCompany:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oAowvaGE6k-h2pvOJSsY6aakY68LNQg0XUQ1phiD&s",
      toCompany:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },
    {
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
      hike: "150% Hike",
      name: "Ayush singh",
      position: "System Analyst",
      fromCompany:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oAowvaGE6k-h2pvOJSsY6aakY68LNQg0XUQ1phiD&s",
      toCompany:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },

    {
      img: "https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp",
      hike: "150% Hike",
      name: "Ayush singh",
      position: "System Analyst",
      fromCompany:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oAowvaGE6k-h2pvOJSsY6aakY68LNQg0XUQ1phiD&s",
      toCompany:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },

    // ",
    // "",
  ];

  return (
    <div className="slider-box">
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {banner.map((e, id) => (
          <div className="slider-wrapper" key={id}>
            <div className="slider-hike">
              <TrendingUpIcon style={{ fontSize: "12px" }} />
              <span>{e.hike}</span>
            </div>

            <img src={e.img} alt="" className="slider-img" />
            <div className="slider-overlay">
              <div className="play-btn">
                <PlayCircleIcon style={{ color: "white", fontSize: "58px" }} />
              </div>
            </div>

            <div className="slider-shadow">
              <div className="slider-name">
                <h3>{e.name}</h3>
                <LinkedInIcon style={{ color: "blue" }} />
              </div>
              <p style={{ fontSize: "13px" }}>{e.position}</p>
              <div className="from-to-company">
                <img src={e.fromCompany} alt="" width={"40px"} />
                {/* <ReplyIcon className="slider-to-from"/> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7InomS2sFKuAUgY8iMoVUkakr2WhKrL-vUPjKov8d5vdu7LKR9AxB1lBN4yvpJUBIw&usqp=CAU"
                  alt=""
                  width={"60px"}
                />
                <img src={e.toCompany} alt="" width={"40px"} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="carrer-courses">
        <span className="carrer-courses-btn">Checkout our Testimonials</span>
      </div>

      <div></div>
    </div>
  );
};

export default Slider;
