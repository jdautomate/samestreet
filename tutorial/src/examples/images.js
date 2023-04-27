import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src='../assets/images/samestreetdodge.JPG' alt="band" />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}


export default Images