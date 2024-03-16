import React from 'react'
import "./footer.css"
import Navigation from './Navigation'
import { Descripation } from './Descripation'
import { Services } from './Services'
import { SocialLink } from './SocialLink'
import { ContactToday } from './ContactToday'
import { MenuLink } from './MenuLink'



export const Footer = () => {
  return (
    <footer>
      <Navigation />
      <Descripation />
      <Services />
      <SocialLink />
      <ContactToday />
      <MenuLink />
    </footer>
  )
}
