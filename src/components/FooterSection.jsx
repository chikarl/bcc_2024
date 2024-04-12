import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo_white.svg'
import sponsor from '../assets/sponsor_white.svg'
import arrow from '../assets/ArrowUpRight.svg'

function FooterSection() {
  return (
    <Wrapper>
      <div className='container'>
      <div className="flex-row">
        <div>
          <Link to='/'>
          <img src={logo} alt="" />
          </Link>
          </div>
        <div>
          <ul className='flex-col'>
          <li><a href="https://www.facebook.com/profile.php?id=100091474623246" target='_blank'>Facebook</a><img src={arrow} alt="" /></li>
          <li><a href="https://instagram.com/bamendacommunitychallenge?igshid=YmMyMTA2M2Y" target='_blank'>Instagram</a><img src={arrow} alt="" /></li>
          <li><a href="https://www.linkedin.com/company/bamendacommunitychallenge/" target='_blank'>LinkedIn</a><img src={arrow} alt="" /></li>
          <li><a href="https://mobile.twitter.com/BamendaCom77733" target='_blank'>Twitter/X</a><img src={arrow} alt="" /></li>
        </ul>
        </div>
      </div>
      <div className="flex-row flex-bottom">
        <div>
          <Link to='https://cits.cm/' target='_blank'>
          <img src={sponsor} alt="" />
          </Link>
          </div>
        <div>
          <ul className='flex-row'>
          <li>
            <Link to='/'>About</Link>
            {/* <a href="#">About</a> */}
            </li>
          <li>
            <Link to='/'>Become a Sponsor</Link>
            </li>
          <li>
            <Link to='/'>Contact</Link>
            </li>
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
  .flex-bottom li a:hover{
  color: rgba(255, 255, 255, 1);
  /* font-size: 18px; */
  }
`
export default FooterSection
