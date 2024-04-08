import React from 'react'

const BulkBooking = () => {
    return (
        <div className='my-2  text-white d_BulkBooking position-relative' style={{ background: "url(Corporate/bulk-booking.avif)" }}>
            <div className='position-absolute top-0 start-0 w-100 h-100' style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>
            <div className="row justify-content-between align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="col-12 col-md-6">
                    <h6 className='my-1'>Bulk Booking</h6>
                    <h2>Exclusive corporate experiences from BookMyShow</h2>
                </div>
                <div className="col-12 col-md-4">
                    <button className="d_bg_red_light_color py-3 text-white btn btn-sm d_sign_btn w-100">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default BulkBooking