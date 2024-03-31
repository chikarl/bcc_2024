import React from 'react'
import headerImg from '../assets/header_img.png'
import  styled from 'styled-components'


function header_img() {
  return (
    <Wrapper>
      <img src={headerImg} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
`
export default header_img
