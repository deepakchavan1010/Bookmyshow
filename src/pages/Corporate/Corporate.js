import React from 'react'
import { Banner } from './Banner'
import Partner from './Partner'
import Records from './Records'
import Solutions from './Solutions'
import TwoViewBanner from './TwoViewBanner'
import Desc from './Desc'
import Campaigns from './Campaigns'
import OurProducts from './OurProducts'
import BulkBooking from './BulkBooking'




const Corporate = () => {
  return (
    <div>
       <Banner />
       <div className="container">
       <Partner />
       <Records /> 
       <TwoViewBanner />
       <Solutions />
       <Desc />   
       <Campaigns />  
       <OurProducts /> 
       <BulkBooking />
       </div> 
    </div>
  )
}

export default Corporate 