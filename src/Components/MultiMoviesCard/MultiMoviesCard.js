import React from 'react'
import MultiCarousel from "react-multi-carousel";
import "./MultiMoviesCard.css"
import { MdOutlineChevronRight } from "react-icons/md";
export const MultiMoviesCard = ({ srcData = [], title, isShowAll = false ,book=false }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='d_movies_carousel'>
            {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center my-2 mx-1'>
                <h4 className='d_h30'>{title}</h4>
                {isShowAll && <div className='d_text_red_light_color d-flex align-items-center'>
                    <span className='d_cursor_pointer d_h14 '>See All</span>
                    <MdOutlineChevronRight />
                </div>}
            </div>}
            <MultiCarousel responsive={responsive}>
                {srcData.map((path, index) => {
                    return <div key={index} className="d_carousel_img_box">
                        <img src={path} alt="" />
                    </div>
                })}

            </MultiCarousel>
              { book && <div div style={{color:"rgb(220,53,75)",fontSize:"20px",fontWeight:"500",margin:"10px 0px 0px 20px"}}>pre book</div>}
        </div>

    )
}
export default MultiMoviesCard