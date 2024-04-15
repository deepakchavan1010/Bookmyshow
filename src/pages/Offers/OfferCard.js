import React from 'react'
import { PiLaptop } from "react-icons/pi";
import { RxMobile } from "react-icons/rx";

const OfferCard = ({ backgroundImgUrl, logoUrl, description, title, date }) => {
    return (
        <div className='bg-white d_card my-3 border'>
            <div className="d_top">
                <div className='d_img_box'>
                    <img src={backgroundImgUrl} alt="" />
                </div>
                <div className='d_hover_content_overlay'></div>
                <div className='d_hover_content'>
                    <h6 className='py-3'>ABOUT OFFER</h6>
                    <p>{description}</p>
                    <div>
                        <small className='d_h11'>AVAILBALE FOR</small>
                        <div className='d-flex gap-3 align-items-center text-center justify-content-center mt-2'>
                            <div>
                                <div className='d_icon rounded-pill'>
                                    <PiLaptop size={20} />
                                </div>
                                <small className='d_h9'>WEB</small>
                            </div>
                            <div>
                                <div className='d_icon rounded-pill'>
                                    <RxMobile size={20} />
                                </div>
                                <small className='d_h9'>MOBILE</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d_logo'>
                    <img src={logoUrl} alt="" />
                </div>
            </div>
            <div className="d_bottom bg-white p-2">
                <h6>{title?.length > 26 ? `${title?.toUpperCase()?.slice(0, 23)}...` : title?.toUpperCase()}</h6>
                <div className="d_date_range">
                    <span>Valid till <span className='roboto-regular'>{date}</span></span>
                </div>
            </div>
        </div>
    )
}

export default OfferCard