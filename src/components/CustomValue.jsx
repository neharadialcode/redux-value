import React, { useState } from "react";

const CustomValue = () => {
  const [active, setActive] = useState(false);
  console.log(active, "active");
  const data = [
    {
      heading: "hello",
      para: [
        {
          first: 1,
          second: 2,
        },
      ],
    },
    {
      heading: "hello2",
      para: [
        {
          first: 1,
          second: 2,
        },
      ],
    },
    {
      heading: "hello3",
      para: [
        {
          first: 1,
          second: 2,
        },
      ],
    },
  ];
  return (
    <div>
      <button onClick={() => setActive(!active)}>Click me</button>
      <h1 className={` ${active ? "text-danger" : "text-success"} `}>
        CustomValue
      </h1>

      {data.map((obj, index) => {
        return (
          <div key={index}>
            <h2 className={`${index === 1 ? "text-danger" : ""}`}>
              {obj.heading}
            </h2>
            <p>
              {index <= 1 ? (
                <>
                  {" "}
                  {obj.para.map((obj) => (
                    <h2 className={``}>
                      {obj.first} <span>{obj.second}</span>
                    </h2>
                  ))}
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomValue;
