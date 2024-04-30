import React from 'react'
import PageHero from '../components/PageHero'
import styled from 'styled-components'
import BlogSection from '../components/BlogGrid'
import Posts from '../components/Posts'

function Blog() {
  return (
    <Wrapper>
      <PageHero  title="Blog" />
      <Posts />
    </Wrapper>
  )
}
const Wrapper = styled.div`
`
export default Blog
