import React from "react";
const data = [
  {
    title: "1000+",
    desc: "Cities",
  },
  {
    title: "6000",
    desc: "Screens",
  },
  {
    title: "1000+",
    desc: <span>COPORATES <br /> WHO TRUST US</span>,
},
{
    title: "15 MILLION+",
    desc:  <span>TICKETS SOLD <br /> PER MONTHS</span>,
},
{
    title: "4 Billion",
    desc: <span>PAGE VIEWS <br /> PER MONTH</span>,
},
];
const Records = () => {
  return (
    <div className="container my-5 px-5">
      <div className="row">
        {data.map(({ title, desc }, index) => {
          return (
            <div key={index} className="text-center" style={{ width: "19%" }}>
              <h4>{title}</h4>
              <p className="d_h14 text-secondary mt-3">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Records;
