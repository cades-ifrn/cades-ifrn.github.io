import React from 'react'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import InitiativesSection from '../components/InitiativesSection'
import EventsSection from '../components/EventsSection'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const IndexPage = ({data}) => (
  <div>
    <Navbar />
    <Masthead />
    <AboutSection />
    <InitiativesSection initiatives={data.allMarkdownRemark.edges} />
    <EventsSection />
    <TeamSection />
    <ContactSection />
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query InitiativesQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___title]}) {
      edges {
        node {
          frontmatter {
            title
            description
            thumbnail
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`