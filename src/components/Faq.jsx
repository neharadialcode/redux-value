import React, { useRef, useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "one",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        tempore, libero ratione accusantium numquam voluptatum officia officiis,
        esse dicta dolore exercitationem odit ex illum tempora deleniti eligendi
        ullam autem eius.`,
    },
    {
      title: "two",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        tempore, libero ratione accusantium numquam voluptatum officia officiis,
        esse dicta dolore exercitationem odit ex illum tempora deleniti eligendi
        ullam autem eius.`,
    },
    {
      title: "three",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        tempore, libero ratione accusantium numquam voluptatum officia officiis,
        esse dicta dolore exercitationem odit ex illum tempora deleniti eligendi
        ullam autem eius.`,
    },
    {
      title: "four",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
        tempore, libero ratione accusantium numquam voluptatum officia officiis,
        esse dicta dolore exercitationem odit ex illum tempora deleniti eligendi
        ullam autem eius.`,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {data.map((obj, i) => (
        <div
          className={`accordion-item ${i === activeIndex ? "active" : ""}`}
          key={i}
        >
          <div className="accordion-header" onClick={() => handleClick(i)}>
            {obj.title}
          </div>
          <div
            className={`accordion-content ${
              activeIndex === i ? "custom_height" : ""
            }`}
            style={{
              height: `${activeIndex === i ? "" : 0}px`,
              overflow: "hidden",
            }}
          >
            {obj.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
