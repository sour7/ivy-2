import React from "react";
import "./event.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const Events = () => {
  const data = [
    {
      eventImg:
        "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1c3yCqeO_5vXQU4MopVJLj5jegAGAhrduvPMFqY1&s",
      name: "Sourabh Kumar",
      position: "Data Analyst",
      certificate: "free certification",
      eventDate: "12th jan 2023, 10:12am",
    },
    {
      eventImg:
        "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1c3yCqeO_5vXQU4MopVJLj5jegAGAhrduvPMFqY1&s",
      name: "Sourabh Kumar",
      position: "Data Analyst",
      certificate: "free certification",
      eventDate: "12th jan 2023, 10:12am",
    },
    {
      eventImg:
        "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1c3yCqeO_5vXQU4MopVJLj5jegAGAhrduvPMFqY1&s",
      name: "Sourabh Kumar",
      position: "Data Analyst",
      certificate: "free certification",
      eventDate: "12th jan 2023, 10:12am",
    },
  ];

  return (
    <div className="events-container">
      <div className="checkout-testimonial-text">
        <h2>Upskill with IvyPro Events </h2>
        <p>
          IBYPro School is a platform that allows educators to create online
          classes whereby they can store the course materials online.
        </p>
      </div>

      <div className="event-wrapper">
        {data.map((e) => (
          <div className="event-box">
            <div>
              <img
                src={e.eventImg}
                alt=""
                width={"100%"}
                height={"200px"}
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="event-details">
              <div className="pic-name">
                <div>
                  {" "}
                  <img
                    src={e.profileImg}
                    alt=""
                    width={"30px"}
                    height={"30px"}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className="event-person-name">{e.name}</p>
                  <p className="event-person-position"> {e.position}</p>
                </div>
              </div>
              <div>
                <LinkedInIcon style={{ color: "blue" }} />
              </div>
            </div>
            <div className="event-outcome">
              <CardMembershipIcon style={{ fontSize: "14px" }} />
              <span>{e.certificate} | </span>
              <AccessTimeFilledIcon style={{ fontSize: "14px" }} />
              <span>{e.eventDate}</span>
            </div>
            <div></div>
            <div className="event-button">
              <span className="event-register">Regster Now</span>
            </div>
          </div>
        ))}
      </div>
      <div className="event-all">
        <span>View All Event</span>
      </div>
    </div>
  );
};

export default Events;
