import React from 'react'
import { GiHut } from "react-icons/gi";
export const ContactToday = () => {
  return (
    <section className='d_bg_dark text-white'>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <div className='d-flex gap-2 align-items-center'>
              <GiHut size={25} />
              <h6>List Your Show</h6>
              <h6 className='fw-normal'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h6>
            </div>
          </div>
          <div className="col-12 col-md-2  text-end p-0 ms-auto">
            <button className='d_red_light_color text-white p-3 py-2 border-0 rounded'>Contact Today</button>
          </div>
        </div>
      </div>
    </section>
  )
}