import React, { useState } from "react";
import "./freAskedQue.css";
const FreAskedQue = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "What is Data Science?",
      answer:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      question: "How do I use React?",
      answer: "To use React, you need to install it first.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span
                className={`faq-arrow ${activeIndex === index ? "active" : ""}`}
              ></span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreAskedQue;
