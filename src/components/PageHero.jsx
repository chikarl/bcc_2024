import React from 'react'
import styled from 'styled-components'
import logoBlack from '../assets/logo-black.svg'
import { Link } from 'react-router-dom'


const PageHero = ({ title }) => {

  return (
    <Wrapper className='container'>
      <div className='flex-row'>
        <div>
          <Link to='/' className='logo'> 
          <img src={logoBlack} alt="logo" />
          </Link>

        </div>
      <div>
        <ul>
          <li><a href="#">TImeline</a></li>
          <li><a href="#">Prizes</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/winners">Winners</Link></li>
        </ul>
      </div>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

.flex-row{
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  /* background-color: #F9BA04; */
  /* color: #000; */
  font-weight: 100;
  align-items: center;
}
h1{
  font-size: 72px;
  font-family: "Product Sans Black";
  margin: 50px 0 100px 0;
  line-height: 75px;
  width: 620px;
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
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
}
@media only screen and  (max-width: 1024px) {
  .logo{
    height: 100px;
  }
  .logo img {
    height: 100%;
  }}
`
export default PageHero
