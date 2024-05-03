import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import Top3Section from '../components/Top3Section'
import TeamListView from '../components/TeamListView'
import TeamGridView from '../components/TeamGridView'

function Winners() {
  return (
    <Wrapper>
      <PageHero  title="Meet our 2024 Winners" />
      <div className='container'>
        <TeamListView  />
      </div>
      <Top3Section />
      <div className='container'>
        <TeamGridView />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Winners
