import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";
const ShowsCards = ({ imgPath, title, background = "#FCF1F1" }) => {
    return (
        <div style={{ background }} className='d_shows_card text-center'>
            <div className='d_shows_card_img'>
                <img src={imgPath} alt="" />
            </div>
            <h4>{title}</h4>
            <BsExclamationCircle size={25} className='d_text_red_light_color' />
        </div>
    )
}

export default ShowsCards