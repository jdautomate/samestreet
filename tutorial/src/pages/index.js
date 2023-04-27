import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage 
            src="../assets/images/IMG_4964.jpg" 
            alt="playing at the bistro"
            className="hero-img" 
            placeholder="tracedSVG" 
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>same street</h1>
              <h4>castro valley, ca</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}