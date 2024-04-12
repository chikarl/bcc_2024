import React from 'react'
import styled from 'styled-components'
import { blogs } from '../utils/blogs'
import blog1 from "../assets/blog1.png"
import arrow from "../assets/Arrow Right.svg"
import { Link } from 'react-router-dom'

function BlogSection() {
  return (
    <Wrapper>
      <div className='container'>
        <h2>Blog</h2>
          {blogs.slice(0, 3).map((blog) =>{
        const {id, title, image} = blog
        // console.log(id);
        return (
        <div className='flex-row' key={id}>
          <div>
          <div className='rev-col'>
          <h3>{title}</h3>
          <Link to={`/blog/${id}`} >
          <button >Read More <img src={arrow} alt=""className='arrow_icon' /></button>
          </Link>
          </div>
          </div>
          <div className='blog-img'>
            <img src={image} alt="" />
          </div>
        </div>
        )
          })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin: 128px 0;
h2{
  margin-bottom: 48px;
}
.flex-row{
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 58px;
}
.flex-row:nth-child(odd){
  flex-direction: row-reverse;
}
.flex-row > div{
  width: 50%;
}
.flex-row button{
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 16px;
  padding: 8px 24px;
  border: 1px solid #000;
  border-radius: 44px;
  cursor: pointer;
  font-family: 'GeneralSans-Variable';
}
.flex-row .button a{
  color: #000;
}
img.arrow_icon{
  width: 28px !important;
  height: 28px !important;
  margin-left: 5px;
}
h3{
  font-size: 40px;
  margin-bottom: 32px;
}
.flex-row:nth-child(odd) .rev-col{
  margin-right: 0;
  margin-left: 50px;
}
.rev-col{
  margin-right: 50px;
}
.blog-img img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

`
export default BlogSection
