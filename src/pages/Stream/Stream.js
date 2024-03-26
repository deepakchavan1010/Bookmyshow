import React from "react";
import "./Stream.css";
import { Carousel } from "react-responsive-carousel";
import { PromotedBanner } from "./PromotedBanner";
import { MultiMoviesCard } from "../../Components/MultiMoviesCard/MultiMoviesCard";
const Data=[
  {
    descripation:"A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    slug:"1h 32m . Adventure, Animation, Comedy . U",
    language:"English",
    moviesname:"kung fu pada",
    title:"Brand new release every friday",
    posterpath:"promoted/et00001563-dsqtbnheks-portrait.jpg",
    path:"url(Promoted/et00001563-flwjdhzdjp-horizontal_poster_still.jpg)"
  },
  {
    isPremiere: true,
    descripation:"A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    slug:"2h 8m • Crime, Mystery, Thriller • UA",
    language:"Hindi",
    moviesname:"Aazam",
    title:"Brand new release every friday",
    posterpath:"promoted/et00343041-lasrumkllk-portrait.jpg",
    path:"url(Promoted/et00343041-nkkkxczqvw-horizontal_poster_still.jpg)"
  },
  {
    descripation:"Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?",
    slug:"2h35m*Action,Adventure,Drama,sce-fi*UA",
    language:"English",
    moviesname:"Dune",
    title:"Brand new release every friday",
    posterpath:"promoted/et00122526-lntlczevkx-portrait.jpg",
    path:"url(Promoted/et00122526-eqnsuankcp-horizontal_poster_still.jpg)"
  },
  {
    isPremiere: true,
    descripation:"Bookmyshow Stream Runtime: 3h 3 mins The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kal Bird and the late Martin J. Sherwin.",
    slug:"3h 10m*Biography,Drama,Historical*UA",
    language:"English",
    moviesname:"Dune",
    title:"Brand new release every friday",
    posterpath:"promoted/et00347867-lvtgffmarq-portrait.jpg",
    path:"url(Promoted/et00347867-xrnfkldssf-horizontal_poster_still.jpg)"
  },
  {
    descripation:"Now that Chris and his girlfriend, Rose have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway in her parent's home upstate. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their",
    slug:"1h44m*Drama,Horror,Thiriller*A",
    language:"English",
    moviesname:"Get Out",
    title:"Brand new release every friday",
    posterpath:"promoted/et00047349-dxwfdnknfb-portrait.jpg",
    path:"url(Promoted/et00047349-nwyvywvcsq-horizontal_poster_still.jpg)"
  },
  
]
export const Stream = () => {
  const moviesdata=[
    {
    title:"Premiere of the week",
    isShowAll:"true",
    srcData:[
        "Stream/et00390762-ndlazdqnzr-portrait.avif",
        "Stream/et00064456-nsmmdnjxhu-portrait.avif",
        "Stream/et00368036-sspvubuyuz-portrait.avif",
        "Stream/et00136633-jhwzvneqzj-portrait.avif",
        "Stream/et00368036-sspvubuyuz-portrait (1).avif",
        "Stream/et00376609-waxyfawybf-portrait.avif",
        "Stream/et00390164-xekrexsdbf-portrait.avif", 
    ],
  },
  {
    title:"new on stream",
    isShowAll:"true",
    srcData:[
        "Stream/et00390164-xekrexsdbf-portrait.avif",
        "Stream/et00374217-rletlcmmwb-portrait.avif",
        "Stream/et00136633-jhwzvneqzj-portrait.avif",
        "Stream/et00045012-lcuwrczste-portrait.avif",
        "Stream/et00368036-sspvubuyuz-portrait (1).avif",
        "Stream/et00136633-jhwzvneqzj-portrait.avif",
        "Stream/et00045012-lcuwrczste-portrait.avif",
    ],
  },
  {
    title:"top 10 tv shows",
    isShowAll:"true",
    srcData:[
        "Stream/et00045012-lcuwrczste-portrait.avif",
        "Stream/et00064456-nsmmdnjxhu-portrait.avif",
        "Stream/et00136633-jhwzvneqzj-portrait.avif",
        "Stream/et00368036-sspvubuyuz-portrait (1).avif",
        "Stream/et00374217-rletlcmmwb-portrait.avif",
        "Stream/et00368036-sspvubuyuz-portrait (1).avif",
    ],
    book:"true",
  },
  {
    title:"upcoming movies",
    isShowAll:"true",
    srcData:[
        "Stream/upcomg2.avif",
        "Stream/upcomig.avif",
        "Stream/coming3.avif"
    ],
    book:"true",
  },
]
  return (
    <section className="d_promoted_banner">
      <Carousel  infiniteLoop autoPlay showStatus={false} className="h-100">
        {Data.map((value,index)=>{
          return <  PromotedBanner key={index} 
          {...value}
          />              
        })}
      </Carousel>
     <div className="my-5 container">
      {moviesdata.map((movies,index)=>{
         return <MultiMoviesCard key={index}
         {...movies}
         />
      })}
     </div>
    </section>
  )
}
