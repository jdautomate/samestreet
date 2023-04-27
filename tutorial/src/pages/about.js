import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const About = () => {
  return (
    <Layout>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>Meet SameStreet</h2>
              <p>Grant - vocals / trumpet / ukelele / percussion<br></br>
                 Jake - vocals / acoustic guitar / trombone<br></br>
                 George - guitar<br></br>
                 Justin - bass<br></br>
                 Mark - drums<br></br>
              </p>Eclectic mix of Americana, pop, classic rock and blues. Beatles - Led Zeppelin - The Band - The Byrds and more
              <p><br></br>
                Same Street also has a handful of original songs (that are quite good).
              </p>
              <Link to="/contact" className="btn">
                contact
              </Link>
            </article>
            <StaticImage 
              src="../assets/images/samstreetdodge.jpg" 
              alt="Dodge Ridge Gig"
              className="about-img"
              placeholder='blurred'
            />
          </section>
        </main>
    </Layout>
  )
}

export default About