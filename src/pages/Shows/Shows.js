import React from "react";
import { Carousel } from "./Carousel";
import ShowsCards from "./ShowsCards";
import Testimonials from "./Testimonials";
function ShowsMainText({ title, desc, width = 75 }) {
    return (
        <div className="text-center">
            <h1>{title}</h1>
            <p style={{ width: `${width}%` }} className=" mx-auto mt-2">{desc}</p>
        </div>
    );
}
export const Shows = () => {
    const cardData = [
        {
            imgPath: "shows img/img12.avif",
            title: "Performances",
        },
        {
            imgPath: "shows img/img6.avif",
            title: "Experiences",
        },
        {
            imgPath: "shows img/img7.avif",
            title: "Expositions",
        },
        {
            imgPath: "shows img/img11.avif",
            title: "Parties",
        },
        {
            imgPath: "shows img/img17.avif",
            title: "Sports",
        },
        {
            imgPath: "shows img/img 16.avif",
            title: "Confercesses",
        },
    ];
    const cardData2 = [
        {
            imgPath: "shows img/img10.avif",
            title: "Online Sales & Marketing",
        },
        {
            imgPath: "shows img/img 13.avif",
            title: "Pricing",
        },
        {
            imgPath: "shows img/img8.avif",
            title: "Food & beverages stalls and the Works!",
        },
        {
            imgPath: "shows img/img9.avif",
            title: "Onground support & gate enty management",
        },
        {
            imgPath: "shows img/img 14.avif",
            title: "Reports & business insights",
        },
        {
            imgPath: "shows img/img15.avif",
            title: "POS, RFID, Turnstiles & more...",
        },
    ];
    return (
        <section className="d_shows">
            <div className="my-3">
                <Carousel />
            </div>
            <div className="bg-white d_show_wrapper ">
                <div className="d_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What you can host?"}
                        desc={
                            "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
                        }
                    />
                    <div className="row">
                        {cardData.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards background="#ECF5ff" {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="d_bg_red_light_color text-white btn btn-sm d_sign_btn fw-bold">List your show</button>
                    </div>
                </div>
                <div style={{ marginTop: 150 }} className="d_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What are the services we offer?"}
                        desc={
                            `After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life.`
                        }
                    />
                    <div className="row">
                        {cardData2.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards  {...card} />
                                </div>
                            );
                        })}
                        <div className="d_h18 mt-5 text-center">
                           <p> Apart form these must haves for any event, we also support a host of other services like SEO for your event,custom pricing for your tickets and this and also this.</p>
                          
                        </div>
                        <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="d_bg_red_light_color text-white btn btn-sm d_sign_btn fw-bold">List your show</button>
                    </div>
                    </div>
                </div>
                <Testimonials/>
                <div style={{ width: "40%", background:"url(shows img/img24.avif)"}} className="mx-auto d_security">
                    <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."} />
                </div>
               
            </div>
        </section>   
            
    );
};