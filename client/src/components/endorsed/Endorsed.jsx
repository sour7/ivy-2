import React, { useEffect, useState } from "react";
import "./endorsed.css";
import axios from "axios"
// const courses = [
//   {
//     id: 1,
//     type: "Career Courses",
//     courseDesc: {
//       img: "https://thedatascientist.com/wp-content/uploads/2021/02/data-science.jpg",
//       title: "Business Analytics Certification IvyPro School",
//       subtitle: "What you earn",
//       point1: "10 real life Projectä",
//       point2: "Guaranteed Placemenë",
//       point3: "Joint Certification from IBM and Ivy Pro School",
//       rating: 4.5,
//       totalEnroll: 1120,
//       hour: "70 total hours",
//       lecture: "232 lectures",
//       alumni: "1000+ Alumni",
//     },
//   },
//   {
//     id: 2,

//     type: "Certificate Courses",
//     courseDesc: {
//       img: "",
//       title: "Business Analytics Certification IvyPro School",
//       subtitle: "What you earn",
//       point1: "10 real life Projectä",
//       point2: "Guaranteed Placemenë",
//       point3: "Joint Certification from IBM and Ivy Pro School",
//       rating: 4.5,
//       totalEnroll: 1120,
//       hour: "70 total hours",
//       lecture: "232 lectures",
//       alumni: "1000+ Alumni",
//     },
//   },
//   // {
//   //   id: 3,
//   //   title: 'React Testing',
//   //   type: '1:1 with Industry Experts',
//   // },
//   {
//     id: 4,
//     title: "React Native",
//     type: "Career Courses",
//     courseDesc: {
//       img: "https://thedatascientist.com/wp-content/uploads/2021/02/data-science.jpg",
//       title: "Business Analytics Certification IvyPro School",
//       subtitle: "What you earn",
//       point1: "10 real life Projectä",
//       point2: "Guaranteed Placemenë",
//       point3: "Joint Certification from IBM and Ivy Pro School",
//       rating: 4.5,
//       totalEnroll: 1120,
//       hour: "70 total hours",
//       lecture: "232 lectures",
//       alumni: "1000+ Alumni",
//     },
//   },
//   // {
//   //   id: 5,
//   //   title: '1:1 with Industry Experts React Hooks',
//   //   type: 'Certificate Courses',
//   // },
//   // {
//   //   id: 6,
//   //   title: 'React Performance',
//   //   type: '1:1 with Industry Experts',
//   // },
//   {
//     id: 7,
//     title: "React Router",
//     type: "Career Courses",
//     courseDesc: {
//       img: "https://thedatascientist.com/wp-content/uploads/2021/02/data-science.jpg",
//       title: "Business Analytics Certification IvyPro School",
//       subtitle: "What you earn",
//       point1: "10 real life Projectä",
//       point2: "Guaranteed Placemenë",
//       point3: "Joint Certification from IBM and Ivy Pro School",
//       rating: 4.5,
//       totalEnroll: 1120,
//       hour: "70 total hours",
//       lecture: "232 lectures",
//       alumni: "1000+ Alumni",
//     },
//   },
//   // {
//   //   id: 8,
//   //   title: 'Redux Fundamentals',
//   //   type: 'Expert led micro workshop',
//   // },
//   // {
//   //   id: 9,
//   //   title: 'Server-side Rendering with React',
//   //   type: '1:1 with Industry Experts',
//   // },
//   {
//     id: 10,
//     title: "React Native Navigation",
//     type: "Career Courses",
//     courseDesc: {
//       img: "https://thedatascientist.com/wp-content/uploads/2021/02/data-science.jpg",
//       title: "Business Analytics Certification IvyPro School",
//       subtitle: "What you earn",
//       point1: "10 real life Projectä",
//       point2: "Guaranteed Placemenë",
//       point3: "Joint Certification from IBM and Ivy Pro School",
//       rating: 2.5,
//       totalEnroll: 1120,
//       hour: "70 total hours",
//       lecture: "232 lectures",
//       alumni: "1000+ Alumni",
//     },
//   },
//   // {
//   //   id: 11,
//   //   title: 'React Native Components',
//   //   type: 'Expert led micro workshop',
//   // },
//   // {
//   //   id: 12,
//   //   title: 'React Native Animations',
//   //   type: '1:1 with Industry Experts',
//   // },
// ];

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = hasHalfStar ? 4 - filledStars : 5 - filledStars;

  return (
    <div>
      {[...Array(filledStars)].map((_, i) => (
        <span key={i} style={{ color: "gold" }}>
          &#9733;
        </span>
      ))}
      {hasHalfStar && <span style={{ color: "gold" }}>&#9735;</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} style={{ color: "grey" }}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

const Endorsed = () => {
  const [selectedType, setSelectedType] = useState("Career Courses");
const [courses, setCourses]= useState([])
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const filteredCourses = courses.filter(
    (course) => course.type === selectedType
  );

  useEffect(()=>{
    const getCourses= async()=>{
       const res= await axios.get("https://ivy-api.onrender.com/api/v1")
       setCourses(res.data)
    }
    getCourses()
  }, [])

  return (
    <div className="endorsed-container">
      <div className="endorsed-wrapper">
        <h2 className="endorsed-title">Explore Industry endorsed Courses</h2>
        <p className="endorsed-desc">
          Explore Industry endorsed Courses (Ivy Professional School courses are
          accredited by NASSCOM and Government of India. Explore the wide range
          of courses to kick start your professional journey)
        </p>
      </div>
      <div className="endorsed-courses">
        <div>
          <div className="course-type">
            <span
              onClick={() => handleTypeClick("Career Courses")}
              className={selectedType === "Career Courses" ? "active" : ""}
            >
              Career Courses
            </span>
            <span
              onClick={() => handleTypeClick("Certificate Courses")}
              className={selectedType === "Certificate Courses" ? "active" : ""}
            >
              Certificate Courses
            </span>
            <span
              onClick={() => handleTypeClick("Expert led micro workshop")}
              className={
                selectedType === "Expert led micro workshop" ? "active" : ""
              }
            >
              Expert led micro workshop
            </span>
            <span
              onClick={() => handleTypeClick("1:1 with Industry Experts")}
              className={
                selectedType === "1:1 with Industry Experts" ? "active" : ""
              }
            >
              1:1 with Industry Experts
            </span>
          </div>
          <ul className="course-details">
            {filteredCourses.map((e) => (
              <div className="single-course" key={e._id}>
                <img
                  src={e.courseDesc.img}
                  alt=""
                  width={"100%"}
                  height={"150px"}
                  style={{
                    borderTopRightRadius: "14px",
                    borderTopLeftRadius: "14px",
                  }}
                />
                <div className="courseDesc">
                  <h2 className="course-heading">{e.courseDesc.title}</h2>
                  <h4 className="subtitle">{e.courseDesc.subtitle}</h4>
                  <ul className="key-points">
                    <li>{e.courseDesc.point1}</li>
                    <li> {e.courseDesc.point2}</li>
                    <li> {e.courseDesc.point3}</li>
                  </ul>
                  <div>
                    <p className="course-rating">
                      <b>{e.courseDesc.rating}</b>
                      <StarRating rating={e.courseDesc.rating} />{" "}
                      <span>({e.courseDesc.totalEnroll})</span>{" "}
                    </p>
                    <p>
                      {e.courseDesc.hour}. | {e.courseDesc.lecture}. |{" "}
                      {e.courseDesc.alumni}
                    </p>
                  </div>
                  <div className="view-program">
                    <span>View Program</span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="carrer-courses">
          <span className="carrer-courses-btn">Explore Career Courses</span>
        </div>
      </div>
    </div>
  );
};

export default Endorsed;
