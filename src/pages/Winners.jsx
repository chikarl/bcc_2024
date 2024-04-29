import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import Top3Section from '../components/Top3Section'
import TeamListView from '../components/TeamListView'

function Winners() {
  return (
    <Wrapper>
      <PageHero  title="Meet our 2024 Winners" />
      <Top3Section />
      <div className='container'>
        <TeamListView ></TeamListView>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Winners
