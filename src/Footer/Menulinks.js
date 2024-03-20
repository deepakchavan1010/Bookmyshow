import React from "react";
const data = [
  {
    title: "MOVIES NOW SHOWING IN SELU",
    links: ["Yodha", "Shaitan", "Unn Savli"],
  },
  {
    title: "Upcoming Movies in Selu",
    links: ["Haddhu Ledhuraa", "Rakshasa Tantra", "Arthur The King", "Dilkush", "Bigul","Kaliyugam Pattanamlo"],
  },
  {
    title: "Movies By Genre",
    links: ["Drama Movies", "Thriller Movies", "Romantic Movies","Action Movies","Comedy Movies","Adventure Movies","Crime Movies","Historical Movies","Sci-Fi Movies","Adaptation Movies"],  
  },
  {
    title: "Upcoming Movies By Genre",
    links: ["Movies in Drama", "Movies in Thriller", "Movies in Action","Movies in Comedy","Movies in Romantic","Movies in Crime","Movies in Horror","Movies in Adventure","Movies in Suspense","Movies in Historical"]
  },
  {
    title: "Movies By Language",
    links: ["Movies in Hindi", "Movies in Marathi", "Movies in Chattisgarhi","Movies in Khasi","Movies in Tulu","Movies in Portuguese","Movies in Japanese","Movies in Haryanavi","Movies in English","Movies in Assamese"]
  },
  {
    title: "Movies By Format",
    links: ["Movies in 2D", "Movies in 3D", "Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in 4DX 3D","Movies in MX4D 3D","Movies in Full Dome","Movies in IMAX 2D","Movies in 7D"]
  },
  {
    title: "Upcoming Movies By Format",
    links: ["Movies in 2D", "Movies in 3D", "Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in 4DX 3D","Movies in MX4D 3D","Movies in Full Dome","Movies in IMAX 2D","Movies in 7D"]
  },
  {
    title: "Movies in Top Cities",
    links: ["Movies in Mumbai", "Movies in Delhi-NCR", "Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movies in Kolkata","Movies in Kochi"]
  },
  {
    title: "Cinemas in Top Cities",
    links: ["Movies in Mumbai", "Movies in Delhi-NCR", "Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movies in Kolkata","Movies in Kochi"]
  },
  {
    title: "COUNTRIES",
    links: ["Indonesia", "Singapore", "UAE","Sri Lanka","West Indies"]
  },
  {
    title: "HELP",
    links: ["About Us", "Contact Us", "Current Opening","Press Release","Press Coverage","Sitemap","FAQs","Terms and Conditions","Privacy Policy"]
  },

]
export const Menulinks = () => {
  return (
    <section className="d_bg_dark_light2 text-white">
            <div className="container py-3 d_text_grey_light_color">
                {data.map((value, index) => {
                    return (
                        <div key={index} className="my-2">
                            <h6 className="d_h13">{value.title.toUpperCase()}</h6>
                            <div className="d_span_link  fw-light">
                                {value.links.map((ele, index) => {                    
                                    return <span key={index} className={`${index !== 0 ? "border-start border-secondary px-2" : "pe-2"}`}>{ele}</span>
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
  );
};
