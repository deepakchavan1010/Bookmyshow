import React from "react";
import "./Corporate.css"
const Solutions = () => {
    const data = [
        {
            title: "End-to-End Creative Support",
            background: "green.avif",
        },
        {
            title: "Marketing & E-mail Guidance",
            background: "red.avif",
        },
        {
            title: "Bulk SMS Communication",
            background: "yellow.avif",
        },
    ];
    return (
        <div className="  container d_solutions">
            <div className="py-4  bg-white" >
                <h6 className="ms-5 mb-2">OUR SUITE OF BUSINESS SOLUTIONS:</h6>
                <div className="row text-white">
                    {data.map(({ background, title }, index) => {
                        return (
                            <div key={index} className="col-12 col-md-4 p-0 ">
                                <div
                                    className="d_card p-5"
                                    style={{ background: `url(Corporate/${background})` }}
                                >
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Solutions;