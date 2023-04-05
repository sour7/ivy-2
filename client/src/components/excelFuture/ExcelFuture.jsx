import React, { useState } from "react";
import "./excelFuture.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function ExcelFuture() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      name: "Attend live classes",
      description: [
        {
          img: "https://navbharattimes.indiatimes.com/thumb/84263635/study-laptopslaptops-84263635.jpg?imgsize=109649&width=1200&height=900&resizemode=75",
          pictitle: "Why you should buy a Course",
          text: "Even though the internet is full of content videos, nothing can replace 1:1 mentored live classes. There are other benefits like live doubt clearing, learning from peers doubts, and motivation to learn and improve.",
          point1: "Expert instruction",
          point2: "Quality course content",
          point3: "Hands-on learning experience with real-life projects",
          point4: "Career support along with resume building.",
          point5: "Networking opportunities.",
        },
      ],
    },
    {
      name: "Solve real world problems",
      description: [
        {
          img: "https://navbharattimes.indiatimes.com/thumb/84263635/study-laptopslaptops-84263635.jpg?imgsize=109649&width=1200&height=900&resizemode=75",
          pictitle: "Why you should buy a Course",
          text: "The wind was howling outside, shaking the windows and rattling the door. Inside the cozy cabin, the fire was crackling in the hearth, casting flickering shadows on the walls. A thick book lay open on the table, its pages yellowed with age. A cup of steaming tea sat beside it, sending up tendrils of fragrant steam.",
          point1: "Expert instruction",
          point2: "Quality course content",
          point3: "Hands-on learning experience with real-life projects",
          point4: "Career support along with resume building.",
          point5: "Networking opportunities.",
        },
      ],
    },
    {
      name: "Build social project portfolio",
      description: [
        {
          img: "https://e0.pxfuel.com/wallpapers/1019/832/desktop-wallpaper-laptop-study.jpg",
          pictitle: "Why you should buy a Course",
          text: "Even though the internet is full of content videos, nothing can replace 1:1 mentored live classes. There are other benefits like live doubt clearing, learning from peers doubts, and motivation to learn and improve.",
          point1: "Expert instruction",
          point2: "Quality course content",
          point3: "Hands-on learning experience with real-life projects",
          point4: "Career support along with resume building.",
          point5: "Networking opportunities.",
        },
      ],
    },
    {
      name: "Prepare for interviews",
      description: [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuMY7tHW72oNSJVWD-BlwtW7tl_1jC8IzbUS43Y56aXlXDa6IJCBX3ZU2Wb1iw_l0sRc&usqp=CAU",
          pictitle: "Why you should buy a Course",
          text: "Even though the internet is full of content videos, nothing can replace 1:1 mentored live classes. There are other benefits like live doubt clearing, learning from peers doubts, and motivation to learn and improve.",
          point1: "Expert instruction",
          point2: "Quality course content",
          point3: "Hands-on learning experience with real-life projects",
          point4: "Career support along with resume building.",
          point5: "Networking opportunities.",
        },
      ],
    },
    {
      name: "Placement assistance",
      description: [
        {
          img: "https://navbharattimes.indiatimes.com/thumb/84263635/study-laptopslaptops-84263635.jpg?imgsize=109649&width=1200&height=900&resizemode=75",
          pictitle: "Why you should buy a Course",
          text: "Even though the internet is full of content videos, nothing can replace 1:1 mentored live classes. There are other benefits like live doubt clearing, learning from peers doubts, and motivation to learn and improve.",
          point1: "Expert instruction",
          point2: "Quality course content",
          point3: "Hands-on learning experience with real-life projects",
          point4: "Career support along with resume building.",
          point5: "Networking opportunities.",
        },
      ],
    },
  ];

  const handleNameClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="object-array">
      <div className="selected-name">
        {data.map((item, index) => (
          <div className="title">
            <div
              key={index}
              className={`name ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => handleNameClick(index)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="description">
        {data[selectedIndex].description.map((e) => (
          <div className="description-box">
            <div className="description-text">
              <h2>{data[selectedIndex].name}</h2>
              <p className="description-para">{e.text}</p>

              <div className="description-keys">
                <div className="description-key">
                  <TaskAltIcon
                    style={{
                      fontSize: "14px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />{" "}
                  <span>{e.point1}</span>
                </div>
                <div className="description-key">
                  <TaskAltIcon
                    style={{
                      fontSize: "14px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />{" "}
                  <span>{e.point2}</span>
                </div>
                <div className="description-key">
                  <TaskAltIcon
                    style={{
                      fontSize: "14px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />{" "}
                  <span>{e.point3}</span>
                </div>
                <div className="description-key">
                  <TaskAltIcon
                    style={{
                      fontSize: "14px",
                      backgroundColor: "orange",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />{" "}
                  <span>{e.point4}</span>
                </div>
              </div>
            </div>
            <div className="description-img">
              <img
                src={e.img}
                alt=""
                width={"100%"}
                style={{
                  borderRadius: "20px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                }}
              />
              <p className="pictitle">{e.pictitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExcelFuture;
