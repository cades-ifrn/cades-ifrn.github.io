import React from 'react'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import InitiativesSection from '../components/InitiativesSection'
import EventsSection from '../components/EventsSection'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const IndexPage = () => (
  <div>
    <Navbar />
    <Masthead />
    <AboutSection />
    <InitiativesSection />
    <EventsSection />
    <TeamSection />
    <ContactSection />
    <Footer />
  </div>
)

export default IndexPage
