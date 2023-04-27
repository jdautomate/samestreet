import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {new Date().getFullYear()} <span>SameStreet Band</span> Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
      
    </footer>
  )
}

export default Footer