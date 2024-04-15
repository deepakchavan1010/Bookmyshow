import React from 'react'
import "./MyCard.css"
import { useNavigate } from "react-router-dom";
export const MyCard = ({ src, movieName, title1,title2,description,language, }) => {
    const navigate = useNavigate()
    const redirectUrlHandler = () => {
        navigate("/details")
    }

    return (
        <div onClick={ redirectUrlHandler} style={{ cursor: "pointer"}}>
            <div className="d_top">
                <div className='d_movie_card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className="d_bottom mt-3">
                <h5 className='d_h19'>{movieName}</h5>
                <h6 className='roboto-regular d_h13 my-1 text-muted'>{title1}</h6>
                <h6 className='roboto-regular d_h13 text-muted'>{language}</h6>
                <h6 className='roboto-regular d_h13 text-muted'>{description}</h6>
                {title2 && <h6 className='roboto-regular d_h13 text-muted'>{title2}</h6>}
            </div>
        </div>
    )
}