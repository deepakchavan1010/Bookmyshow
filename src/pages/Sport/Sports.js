import React from 'react'
import { Filtercomp } from "../../Components/Filter/Filtercomp";
import { AppliedFilters } from "../../Components/Filter/AppliedFilters";
import { Button } from "../../Components/Buttons/Button";
import { MyCard } from "../../Components/Card/MyCard";

const SportsData= [
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00388586-mwlcvfjcyq-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390974-hplgngpfmb-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00385107-pdbsgpmdcs-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390974-hplgngpfmb-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00388586-mwlcvfjcyq-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390973-rjymwypshw-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00391082-lvtlfwqsew-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390974-hplgngpfmb-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00391563-jmavbyksrq-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00391704-vujkedywux-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00388586-mwlcvfjcyq-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00391895-peuspwkdtd-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390974-hplgngpfmb-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "1000 onwords",
        language: "ipl",
        src: "/Sportsimg/et00388586-mwlcvfjcyq-portrait.avif",
    },
    {
        movieName: "matchs",
        movieCertificate: "UA",
        language: "ipl",
        src: "/Sportsimg/et00390974-hplgngpfmb-portrait.avif",
    },
];
    

export const Sports = () => {
      const Sportsdata = [
          {
              title: "Date",
              buttons: ["Today","Tomorrow","This Weeked"],
          },
          {
              title: "Categories",
              buttons: ["cricket","football","running","polo"],
          },
          {
              title: "More Filters",
              buttons: ["Outdoor Events","ipl","Fast Filing","Kida Allowed"],
          },
          {
              title: "Price",
              buttons: ["Free","0-500","501-2000","Above2000"],
          },
      ];
      return (
          <section className='d_sports'>
            <div className='d_top py-3'>
            <div className="container">
          <div className='w-100'>
            <img src="ipl banner.avif" className='rounded-3 ' width={"100%"} alt="" />
          </div>
        </div>
            </div>
              <div className="container my-5">
                  <div className="row">
                      {/* //left  */}
                      <div className="col-12 col-md-3 ps-0 d_sticky">
                          <h4>Filters</h4>
                          {Sportsdata.map((value, index) => {
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
                                  title={"Sports In Selu"}
                                  buttons={["polo","cricket","footboll","running"]}
                              />
                              <div className="row">
                              {SportsData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
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
  
 
