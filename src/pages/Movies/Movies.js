import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Movies.css"
import { Filtercomp } from "../../Components/Filter/Filtercomp";
import { AppliedFilters } from "../../Components/Filter/AppliedFilters";
import { Button } from "../../Components/Buttons/Button";
import { HeadingBanner } from "../../Components/Banners/HeadingBanner";
import { MyCard } from "../../Components/Card/MyCard";
const carouselData = ["banner1.avif","img1.avif"];

const moviesData = [
    {
        movieName: "Yodha",
        movieCertificate: "UA",
        language: "Hindi",
        src: "yodha img.avif",
    },
    {
        movieName: "Shaitaan",
        movieCertificate: "UA",
        language: "Hindi",
        src: "shaitan img.avif",
    },
    {
        movieName: "Unn Sawali",
        movieCertificate: "UA",
        language: "Marathi",
        src: "unn savli img.avif",
    },
];

export const Movies = () => {
    const data = [
        {
            title: "Languages",
            buttons: ["Marathi", "Hindi"],
        },
        {
            title: "Genres",
            buttons: ["Thriller", "Action", "Drama", "Romantic", "Supernatural"],
        },
        {
            title: "Format",
            buttons: ["2D"],
        },
    ];
    return (
        <section>
            <Carousel
                interval={5000}
                autoPlay
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
            >
                {carouselData.map((value, index) => {
                    return (
                        <div
                            key={index}
                            style={{ width: "100%", height: 300 }}
                            className=" p-2"
                        >
                            <img
                                width={"100%"}
                                height={"100%"}
                                src={value}
                                className="rounded-3"
                                alt=""
                            />
                        </div>
                    );
                })}
            </Carousel>
            <div className="container my-5">
                <div className="row">
                    {/* //left  */}
                    <div className="col-12 col-md-3 ps-0">
                        <h4>Filters</h4>
                        {data.map((value, index) => {
                            return (
                                <Filtercomp
                                    key={value.title}
                                    buttons={value.buttons}
                                    title={value.title}
                                />
                            );
                        })}
                        <Button btnType="outline" title={"Browse by Cinemas"} />
                    </div>
                    <div className="col-12 col-md-9">
                        <div>
                            <AppliedFilters
                                title={"Movies in Selu"}
                                buttons={["Hindi", "Marathi", "Thriller"]}
                            />
                            <div className="my-4">
                                <HeadingBanner
                                    title2={"Explore Upcomming Movies"}
                                    title={"Comming Soon"}                         
                                />
                            </div>
                            <div className="row">
                            {moviesData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
                               <MyCard {...value} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
