import React from 'react'
import PageHero from '../components/PageHero'
import styled from 'styled-components'
import BlogSection from '../components/BlogSectionInfo'

function Blog() {
  return (
    <Wrapper>
      <PageHero  title="Blog" />
      <BlogSection />
    </Wrapper>
  )
}
const Wrapper = styled.div`
`
export default Blog
