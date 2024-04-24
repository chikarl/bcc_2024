import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
function Error() {
  return (
    <Wrapper>
      <Header />
      <div className="container">
    <div>
      <h1>404 Page Not Found !!!!</h1>
    </div>
    <div>
      <Link to='/'>Go Back Home</Link>
      </div>
      </div>
      </Wrapper>
  )
}
const Wrapper = styled.div``
export default Error
