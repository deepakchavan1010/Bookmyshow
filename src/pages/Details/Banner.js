
import React from "react";
import { IoMdStar } from "react-icons/io";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { MdOutlineShare } from "react-icons/md";
const Banner = () => {
    return (
        <div
            className="b_movies_details"
            style={{
                backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maidaan-et00109952-1712742201.jpg")`,
            }}
        >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-8">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-4">
                                <div>
                                    <div className="b_img_box">
                                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maidaan-et00109952-1712742201.jpg" alt="" />
                                    </div>
                                    <div className="bg-dark text-center text-white py-1">
                                        <h6 className="b_h12">In cinemas</h6>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-7 text-white">
                                <h2>Maidaan</h2>
                                <div className="b_rating_box p-3 px-4 rounded-3 justify-content-between d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <IoMdStar size={25} className="d_text_red_light_color shadow" />
                                        <h6 className="m-0 ms-3">7.5/10 (5.7K Votes)</h6>
                                        <HiOutlineChevronRight size={18} />
                                    </div>
                                    <button className="border-0 rounded-2 b_h14 p-2 bg-white">
                                        Rate Now
                                    </button>
                                </div>
                                <div className="b_screen_box d-flex gap-2">
                                    <div className="b_screen d-flex gap-1 p-1 px-2 bg-light text-black ">
                                        <Link to={"/"} className="text-black">2D,</Link>
                                        <Link to={"/"} className="text-black">ICE ,</Link>
                                        <Link to={"/"} className="text-black">IMAX 2D</Link>
                                    </div>
                                    <div className="b_lang d-flex gap-1 p-1 px-2 bg-light text-black ">
                                        <Link to={"/"} className="text-black">Hindi</Link>
                                    </div>
                                </div>
                                <div className="b_duration_box my-4 d_h14 d-flex align-items-center gap-2 text-white">
                                    <span>3h 1m <GoDotFill size={10} /></span>
                                    <div className="d-flex gap-1">
                                        <Link to={"/"} className="text-white">Biography,</Link>
                                        <Link to={"/"} className="text-white">Drama ,</Link>
                                        <Link to={"/"} className="text-white">Sports</Link>
                                    </div>
                                    <span>  <GoDotFill size={10} /> UA <GoDotFill size={10} /></span>
                                    <span>10 Apr, 2024</span>
                                </div>
                                <button className="d_bg_red_light_color text-white rounded-3 btn btn-sm b_sign_btn b_h18 p-2 px-5">Book tickets</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <button className="b_share_btn">
                            <MdOutlineShare size={30}/>
                            <h6>Share</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
