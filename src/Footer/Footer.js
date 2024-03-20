import React from 'react'
import "./footer.css"
import { Navigations } from './Navigations'
import { Descripation } from './Descripation'
import { ContactToday } from './ContactToday'
import { Service } from './Service'
import { Menulinks } from './Menulinks'
import { SocialLinks } from './SocialLink'

export const Footer = () => {
  return (
    <footer>
      <Navigations />
      <Descripation />
      <ContactToday />
      <Service />
      <Menulinks />
    <SocialLinks />
    </footer>
  )
}
