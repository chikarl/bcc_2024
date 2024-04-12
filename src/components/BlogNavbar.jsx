import React from 'react'
import styled from 'styled-components'
import logoBlack from '../assets/logo-black.svg'
import logoWhite from '../assets/logo_white.svg'
import { Link } from 'react-router-dom'


const BlogNavbar = ({ blog }) => {
  console.log(blog.color);
  const divColor = {
    color: blog.color
  }
  return (
    <Wrapper>
      <div className='flex-row'>
        <div>
          <Link to='/' className='logo'> 
          {
            blog.color === 'black' ? <img src={logoBlack} alt="" /> : <img src={logoWhite} alt="" />
          }
          </Link>

        </div>
      <div>
        <ul>
          <li><a href="#" style={divColor}>TImeline</a></li>
          <li><a href="#" style={divColor}>Prizes</a></li>
          <li><a href="#" style={divColor}>Blog</a></li>
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
  /* background-color: #F9BA04; */
  /* color: #000; */
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
  /* color: black; */
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
export default BlogNavbar
