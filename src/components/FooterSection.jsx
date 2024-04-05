import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_white.svg'
import sponsor from '../assets/sponsor_white.svg'
import arrow from '../assets/ArrowUpRight.svg'

function FooterSection() {
  return (
    <Wrapper>
      <div className='container'>
      <div className="flex-row">
        <div><img src={logo} alt="" /></div>
        <div>
          <ul className='flex-col'>
          <li><a href="#">Facebook</a><img src={arrow} alt="" /></li>
          <li><a href="#">Instagram</a><img src={arrow} alt="" /></li>
          <li><a href="#">LinkedIn</a><img src={arrow} alt="" /></li>
          <li><a href="#">Twitter/X</a><img src={arrow} alt="" /></li>
        </ul>
        </div>
      </div>
      <div className="flex-row flex-bottom">
        <div><img src={sponsor} alt="" /></div>
        <div>
          <ul className='flex-row'>
          <li><a href="#">About</a></li>
          <li><a href="#">Become a Sponsor</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 50px 0;
  color: white;
  background-color: black;
  ul{
    list-style: none;
    /* padding: 0; */
    /* display: flex; */
    /* flex-direction: column; */
    
  }
  ul.flex-col {
    align-items: end;
    justify-content: center;
    justify-self: center;
    justify-items: center;
    text-align: center;
  /* display: flex; */
  /* justify-content: space-between; */
}
  ul.flex-col li {
    display: flex;
    justify-self: center;
    justify-items: center;
    text-align: center;
    padding-bottom: 16px;
  }
  ul.flex-col li  img{
    margin-left: 10px;
  }
li{
  margin: 0 10px;
  padding: 0;
}
li a{
  color: white;
  text-decoration: none;
  font-size: 16px;
}
li img{
  width: 24px;
  height: 24px;
}
.flex-row{
    justify-content: space-between;
    padding: 20px;
  }
  .flex-bottom{
    align-items: end;
  }
  .flex-bottom li a{
    color: rgba(255, 255, 255, 0.5);
  }
`
export default FooterSection
