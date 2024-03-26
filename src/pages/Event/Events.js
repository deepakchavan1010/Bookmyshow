import React from "react";
import "./Events.css"
import { Filtercomp } from "../../Components/Filter/Filtercomp";
import { AppliedFilters } from "../../Components/Filter/AppliedFilters";
import { Button } from "../../Components/Buttons/Button";
import { MyCard } from "../../Components/Card/MyCard";

const EventData= [
    {
        movieName: "Masterclass on Consistent Compounding",
        title1: "Bandra Reclamation: Mumbai",
        title2: "Workshops",
        description: "₹ 1000 onwards",
        src: "/Events/img1.avif",
    },
    {
        movieName: "Focusing - The First Primary Goal",
        title1: "Ameenpur Lake: Hyderabad",
        title2: "Education",
        src: "/Events/img2.avif",
    },
    {
        movieName: "BMW Joytown 2024",
        title1: "Bandra Reclamation: Mumbai",
        language: "Marathi",
        description: "₹ 1000 onwards",
        src: "/Events/img3.avif",
    },
    {
        movieName:  "Exposure Math - Capture Any Photography Genre",
       
        language: "hindi",
        src: "/Events/img4.avif",
    },
    {
        movieName:  "Masterclass on Consistent Compounding",
       
        language: "Marathi",
        src: "/Events/img5.avif",
    },
    {
        movieName:"Focusing - The First Primary Goal",
        
        language: "hindi,telugu",
        src: "/Events/img6.avif",
    },
    {
        movieName:  "BMW Joytown 2024",
       
        language: "hindi",
        src: "/Events/img7.avif",
    },
    {
        movieName:"Exposure Math - Capture Any Photography Genre",
       
        language: "hindi,english",
        src: "/Events/img8.avif",
    },
    {
        movieName: "Focusing - The First Primary Goal",
        
        language: "hindi",
        src: "/Events/img9.avif",
    },
    {
        movieName: "Exposure Math - Capture Any Photography Genre",
       
        language: "hindi",
        src: "/Events/img10.avif",
    },
    {
        movieName: "Focusing - The First Primary Goal",
     
        language: "hindi",
        src: "/Events/img11.avif",
    },
    {
        movieName:"BMW Joytown 2024",
        
        language: "hindi",
        src: "/Events/img12.avif",
    },
    {
        movieName:  "Focusing - The First Primary Goal",
      
        language: "hindi",
        src: "/Events/img13.avif",
    },
    {
        movieName:"BMW Joytown 2024",
     
        language: "hindi",
        src: "/Events/img14.avif",
    },
];
    
export const Events = () => {
    const data = [
        {
            title: "Date",
            buttons: ["Today","Tomorrow","This Weeked"],
        },
        {
            title: "Language",
            buttons: ["English","Hindi","Telugu","Punjabi"],
        },
        {
            title: "Categories",
            buttons: ["Workshop", "Online streaming event", "Comedy shows","Kids","performances","Music shows"],
        },
        {
            title: "More Filters",
            buttons: ["Online Streaming","Fast Filing","Outdoor Events","Must Attend","Unmissable Events","Kids Activites","Kida Allowed","Offers for you"],
        },
        {
            title: "Price",
            buttons: ["Free","0-500","501-2000","Above2000"],
        },
    ];
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    {/* //left  */}
                    <div className="col-12 col-md-3 ps-0 d_sticky">
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
                                title={"Events In Selu"}
                                buttons={["Workshop", "Online streaming event", "Comedy shows","Kids","performances","Music shows"]}
                            />
                            <div className="row">
                            {EventData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
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
