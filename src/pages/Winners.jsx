import React from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero'
import Top3Section from '../components/Top3Section'
import TeamListView from '../components/TeamListView'
import TeamGridView from '../components/TeamGridView'
import { winners2023, winners2024 } from '../utils/winners'

function Winners() {
  return (
    <Wrapper>
      <PageHero  title="Meet our 2024 Winners" />
      <Top3Section year="2024" data={ winners2024 }/>
      <div className='container'>
        <TeamListView  />
      </div>
      <Top3Section year="2023" data={ winners2023 } />
      <div className='container'>
        <TeamGridView />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Winners
