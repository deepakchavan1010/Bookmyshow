import React from "react";
import { Carousel } from "react-responsive-carousel";

const Tesimonials2 = () => {
    return (
        <div className="my-4 d_testimonials2">
            <h5 className="text-center my-3">Testimonials</h5>
            <Carousel showStatus={false}>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="d_img_box">
                                <img src="Corporate/mastercard-logo (1).avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="d_h14">
                                “Through our partnership with BookMyShow, we have been able to
                                offer very exciting events privileges to our Select members. We
                                were able to drive excitement/ engagement with unique offering
                                which was much appreciated by our privileged members. Thank you
                                BookMyShow and team for great work.”
                            </p>
                            <h6>
                            Vikas Verma <br /> Executive Director <br />
                            MasterCard (South Asia)
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="d_img_box">
                                <img src="Corporate/cm-logo.avif" alt="" />
                            </div>
                        </div>
                     
                       <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="d_h14">
                                ““As a token of our appreciation to the prospects who visit our Holiday World, we offer them BMS vouchers. These vouchers helps us further reinforce our core thought of creating Magical Moments for them and instantly put a smile on their faces“”
                            </p>
                            <h6>
                            Abhijeet Ghosh <br /> Regional Marketing Manager<br />
                            Mahindra Holidays and Resorts India Ltd
                            </h6>
                        </div>
                   
                    </div>
                </div>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="d_img_box">
                                <img src="Corporate/hp-logo.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="d_h14">
                                ““Our association with BookMyShow has helped us reach out to specific set of consumers who have varied interests in Movies, Sports and Plays. We have been able to engage with our consumers by offering them tailor made promotions and delight them by bringing more value when they buy an HP product. We at HP, truly value this association and look forward to many such initiatives that benefit our consumers.“”
                            </p>
                            <h6>
                            Lloyd Mathias<br />Head Marketing <br />
                            HP Printing and Personal Systems, India
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="d_img_box">
                                <img src="Corporate/o-logo.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="d_h14">
                                “Through our partnership with BookMyShow, we have been able to
                                offer very exciting events privileges to our Select members. We
                                were able to drive excitement/ engagement with unique offering
                                which was much appreciated by our privileged members. Thank you
                                BookMyShow and team for great work.”
                            </p>
                            <h6>
                                Ashish Lingamneni <br /> Associate Director - Marketing <br />
                                OlaCabs
                            </h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="d_img_box">
                                <img src="Corporate/mmt-logo.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="d_h14">
                                "My experience of working with BMS Corporate Solutions team has been absolutely awesome. I really like the professionalism and biasedness for action that the team demonstrates. Team is extremely clear with their communication and maintain extreme transparency which is very important to build trust in any partnership””
                            </p>
                            <h6>
                            Arun Garg <br />Head - Alliances & Partnerships<br />
                            MakeMyTrip
                            </h6>
                        </div>
                    </div>
                </div>             
            </Carousel>
            <div className="text-center">
            <button className="btn btn-outline-danger w-25 py-2 mt-2">Partner with us</button>
            </div>
        </div>
    );
};

export default Tesimonials2;