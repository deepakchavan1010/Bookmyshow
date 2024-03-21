import React from "react";
import "./Stream.css";
import { Carousel } from "react-responsive-carousel";
import { PromotedBanner } from "./PromotedBanner";

const StreamData=[
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
  return (
    <section className="d_promoted_banner">
      <Carousel  infiniteLoop autoPlay showStatus={false} className="h-100">
        {StreamData.map((value,index)=>{
          return <  PromotedBanner key={index} isPremiere  descripation={value.descripation}  slug={value.slug}  language={value.language} moviesname={value.moviesname} title ={value.title}  posterpath={value.posterpath}  path={value.path}/>
        })}
      </Carousel>
    </section>
  );
};
