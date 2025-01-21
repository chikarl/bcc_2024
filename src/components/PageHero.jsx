import React, { useState } from 'react'
import styled from 'styled-components'
import logoBlack from '../assets/logo-black.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const PageHero = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper className='container'>
      <div className='flex-row'>
        <div>
          <Link to='/' className='logo'> 
          <img src={logoBlack} alt="logo" />
          </Link>

        </div>
      <div className="menu">
          <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu}/>
          <ul className={isOpen ? "active" : ""}>
            {/* <li>
              <a href="#">Timeline</a>
            </li> */}
            <li>
              <Link to="/winners">Winners</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li>
              <a href="#contact">Contact</a>
            </li> */}
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
  }
}
@media only screen and  (max-width: 1024px) {
  h1{
    font-size: 48px;
    line-height: 50px;
    width: 100%;
  /* margin: 50px 0 10px 0; */
  }
 }
 .hamburger {
    display: none;
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 1024px) {
    .menu {
      position: relative;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 100%;
      background-color: #fff;
      padding: 10px;
      width: 100%;
    }

    ul.active {
      display: flex;
    }

    .hamburger {
      display: block;
    }
  }
`
export default PageHero
