import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
 export const Navigations = () => {
  const { pathname } = useLocation()
  const [navigation, setNavigation] = useState(<span>Home <FaArrowRightLong />  Movies</span>)
  useEffect(() => {
    switch (pathname) {
      case "/Corporate":
        setNavigation(<span>Online Tickets <FaArrowRightLong />Voucher</span>)
        break;
      case "/list-your-shows":
          setNavigation(<span>Online Tickets <FaArrowRightLong />  List Your Show</span>)
          break;
      case "/stream":
        setNavigation(<span>Home <FaArrowRightLong />  Stream</span>)
            break;
        case "/events":
            setNavigation(<span>Home <FaArrowRightLong />  Events</span>)
            break;
        case "/plays":
            setNavigation(<span>Home <FaArrowRightLong />  Plays</span>)
            break;
        case "/sports":
            setNavigation(<span>Home <FaArrowRightLong />  Sports</span>)
            break;
        case "/activities":
            setNavigation(<span>Home <FaArrowRightLong /> Activities </span>)
            break;
        default:
            setNavigation(<span>Home <FaArrowRightLong />  Movies</span>)
            break;
    }
}, [pathname])

  return (
    <section className='bg-white'>
      <div className='container py-3 text-muted d_h12' >
       {navigation}
      </div>
    </section>
    
  )
}
export default Navigations