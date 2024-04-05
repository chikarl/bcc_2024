import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.svg'


function nav() {
  return (
    <Wrapper>
      <div className='flex-row'>
        <div>
        <div className='logo'><img src={logo} alt="" /></div>

        </div>
      <div>
        <ul>
          <li><a href="#">TImeline</a></li>
          <li><a href="#">Prizes</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
@font-face {
  font-family:'Product Sans Thin'; ;
  src: url(../assets/fonts/ProductSans-Thin.ttf);
}
.flex-row{
  font-family: 'Product Sans Thin';
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  background-color: #4C25EF;
  color: white;
  font-weight: 100;
}

ul{
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
}
li{
  margin: 0 10px;
  padding: 0;
}
li a{
  color: white;
  text-decoration: none;
  font-size: 14px;
}
@media only screen and  (max-width: 1024px) {
  .logo{
    height: 100px;
  }
  .logo img {
    height: 100%;
  }}
`
export default nav
