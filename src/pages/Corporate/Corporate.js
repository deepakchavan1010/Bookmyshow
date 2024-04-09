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
import Tesimonials2 from './Tesimonials2'
import Questions from './Questions'



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
       <Tesimonials2 />
       <Questions />
       </div> 
    </div>
  )
}

export default Corporate 