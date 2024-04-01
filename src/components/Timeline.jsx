import React from 'react'
import styled from 'styled-components'
import bg_img from '../assets/img/bg_img.svg'
function Timeline() {
  return (
    <Wrapper>
      <div className='bg-img'>
      <div className='container timeline'>
        <h4>Time line</h4>

        <h1>Registration <br></br>Begins</h1>

        <h2>March1</h2>

      </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
@font-face {
  font-family: 'Product Sans Light';
  src: url(./assets/fonts/ProductSans-Light.ttf);
}
background-color: black;
background-image: url(${bg_img});
color: white;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
height: 814px;
.timeline{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
}
.timeline h4{
  font-size: 32px;
  padding: 160px 0 50px 0 ;
}
.timeline h1{
  font-family: 'Product Sans Light';
  font-size: 64px;
}
.timeline h2{
  font-size: 36px;
}
.timeline h2, .timeline h4{
  font-family: 'Product Sans';

}
`
export default Timeline
