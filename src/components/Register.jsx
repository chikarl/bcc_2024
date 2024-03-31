import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/BCC23IMG_1.png'
function Register() {
  return (
    <Wrapper>
      <div className='container register'>
        <div className='text-section'>
        <div className='register-info'> 
        <span>1</span>
        <div>
          <h2>Create a Team</h2>
          <p>Create a team of a maximum of 5 members</p>
          <button className='btn'><a href="#">Submit a Solution</a> </button>
        </div>
        </div>
        </div>
        <div className='image-section'>
          {/* <img src={img1} alt="" /> */}
          </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin:100px 0;
@font-face {
  font-family: 'Product Sans Black';
  src: url(../assets/fonts/ProductSans-Black.ttf);
}
span{
  font-family: 'Product Sans Black';
  font-size: 250px;
  color: rgb(255, 255, 255, 0.1);
  /* margin-bottom: px; */
}
  /* .register{
    background-color: var(--blue);
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 3rem auto;
    height: 450px;
    border-radius: 32px;
    color: white;
  } */

  .container {
    display: flex;
    overflow: hidden;
    border-radius: 32px;
  }
  
  .text-section {
    background-color: var(--blue); /* Replace with actual color */
    height: 450px;
    color: white;
    /* padding: 40px; */
    flex: 0 0 50%; /*Do not grow, do not shrink, start at 50% of the parent*/
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
  }

  .image-section {
    flex: 0 0 50%;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
  }

  
  .register-info{
    display: flex;
    align-items: center;
    position: relative;
    margin-top:20px;
    margin-left: 80px;
  }
  .register-info span{
    position: absolute;
    top: -70px;
    left: -27px;
  }
  .register-info h2{
    font-size: 2rem;
  }
  .register-img img{
    border-radius: 0 32px 32px 0;
    width: 100%;
    height: 450px;

  }
  button{
    background-color: transparent;
    color: white;
    /* padding: 24px 48px; */
    /* border: none; */
    border: 1px solid white;
    /* border-radius: 36px; */
    /* font-size: 1rem; */
    margin-top: 60px;
  }
  a{
    text-decoration: none;  
    color: white;
  font-family: 'Product Sans';

  }
`
export default Register
