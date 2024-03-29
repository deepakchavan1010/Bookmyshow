import React from 'react'
import { Link } from 'react-router-dom'

export const BannerCard = ({title,description,imgPath,background=""}) => {
  return (
    <div className='p-3 mx-2 text-white' style={{width:"50%",background}}>
        <div className="row align-items-center">
            <div className="col-12 col-md-7">
                <h2 className='mb-2'>{title}</h2>
                <p className='d_h18 pe-5'>{description}</p>
                <Link to={"/"} className='text-white text-decoration-none d_h20'>Konw More</Link>
                <button className='bg-white rounded-1 border-0 d_text_red_light_color  d-block mt-4 px-4' style={{padding:"6px 20px"}}>
                    Contact us Today
                </button>
            </div>
            <div className="col-12 col-md-5">
                <div className='d_banner_card_img_box'>
                    <img src={imgPath} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}