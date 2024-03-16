import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
export const Service = () => {
  const data = [
    {
      icon: <RiCustomerService2Fill size={50} />,
        title: "24/7 CUSTOMER CARE",
    },
    {
      icon: <GiTicket size={50} />,
      title: "RESEND BOOKING CONFORMATIONS",
  },
  {
      icon: <FaEnvelopeOpenText size={50} />,
      title: "SUBSCRIBE TO THE NEWSLETTERS",
  },
];
  return (
    <section className="d_bg_dark_light text-white">
            <div className="container py-2">
                <div className="row">
                    {data.map((value, index) => {
                        return <div key={index} className="col-12 col-md-4 text-center d_service_box">
                            {value.icon}
                            <p className="d_h12 roboto-light mt-1">{value.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
   
   );
  };


 

        
 