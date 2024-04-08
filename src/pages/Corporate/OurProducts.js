import React from 'react'

const OurProducts = () => {
    return (
        <div className='bg-white my-2 py-2 d_our_products'>
            <h5 className='ms-5 mb-4 d_h16'>OUR PRODUCTS</h5>
            <div className="row text-white ">
                <div className="col-12 col-md-6 p-0">
                    <div style={{ background: "url(Corporate/movie-voucher.avif" }} className='b_box'>
                        <div style={{ width: "60%" }} className=' mx-auto'>
                            <h2 className='mb-4'>Movie Vouchers</h2>
                            <p>Highly customizable, single usage,</p>
                            <p> promotional codes in the form of</p>
                            <p> set amount / value or a percentage</p>
                            <p>  of discount on the ticket cost.</p>
                            <p> promotions, consumer activation</p>
                            <p> and countless more!</p>
                            <button className='btn bg-white d_text_red_light_color my-5 p-3 px-5 '>Enquire</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-0">
                    <div style={{ background: "url(Corporate/gift-voucher.avif)" }} className='d_box'>
                        <div style={{ width: "60%" }} className=' mx-auto'>
                            <h2 className='pt-5 pb-4'>Gift Vouchers</h2>
                                <div>                             
                            <p>Amazing little pre-loaded cash cards </p>                            
                            <p>which can be used to purchase tickets</p>
                            <p>across all categories for 6 months.</p>
                            <p>Be it employee rewards, trade channel</p>
                            <p>incentive or consumer engagement,</p>
                            <p>a gift voucher fits all.</p>                             
                                    </div>
                            <button className='btn bg-white d_text_red_light_color my-5 p-3 px-5'>Enquire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts