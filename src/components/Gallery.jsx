import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img_3.png'
import img6 from '../assets/img/img26.jpg'
import img5 from '../assets/img/img5.png'
import img7 from '../assets/img/img28.jpg'
import img8 from '../assets/img/img8.png'
import img9 from '../assets/img/img9.png'
import img10 from '../assets/img/img10.png'
import img11 from '../assets/img/img11.png'
import img12 from '../assets/img/img12.png'
import img13 from '../assets/img/img27.jpg'
import img14 from '../assets/img/img14.png'

function Gallery() {
  return (
    <Wrapper>
      <div className='container'>
        <h2>Gallery</h2>
        <div>
          <div className='grid_3'>
            <div>
              <img src={img1} alt='' />
            </div>
            <div>
              <img src={img2} alt='' />
            </div>
            <div>
              <img src={img3} alt='' />
            </div>
          </div>
          <div className='grid_2'>
            <div>
              <img src={img6} alt='' />
            </div>
            <div>
              <img src={img5} alt='' />
            </div>
          </div>
          <div className='grid_1'>
            <img src={img7} alt='' />
          </div>
          <div className='grid_2_rev'>
            <div>
              <img src={img9} alt='' />
            </div>
            <div>
              <img src={img8} alt='' />
            </div>
          </div>
          <div className='grid_3'>
            <div>
              <img src={img10} alt='' />
            </div>
            <div>
              <img src={img11} alt='' />
            </div>
            <div>
              <img src={img12} alt='' />
            </div>
          </div>
          <div className='grid_2'>
            <div>
              <img src={img13} alt='' />
            </div>
            <div>
              <img src={img14} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 100px 0;
h2{
  font-size: 2rem;
  margin-bottom: 20px;
}
.grid_3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* This ensures space is distributed evenly between and around the items */
}

.grid_3 > * {
  flex: 1 1 33.33%; /* This allows items to grow and shrink but tries to base it on 33.33% of the container's width */
  max-width: 33.33%; /* This ensures that the item does not grow beyond 33.33% of the container's width */
}

/* For the 2-column layout with second column taking up 33.33% of the space */
.grid_2 {
  display: flex;
  flex-wrap: wrap;
}

.grid_2 > :first-child {
  flex: 1 1 calc(100% - 33.33%); /* This allows the first child to take the remaining space except for 33.33% */
  max-width: calc(100% - 33.33%);
}

.grid_2 > :last-child {
  flex: 0 1 33.33%; /* This prevents the second child from growing but allows it to shrink, basing it on 33.33% of the container's width */
  max-width: 33.33%;
}

/* For the 2-column layout with the first column taking up 33.33% of the space, reversed */
.grid_2_rev {
  display: flex;
  flex-wrap: wrap;
}

.grid_2_rev > :first-child {
  flex: 0 1 33.33%;
  max-width: 33.33%;
}

.grid_2_rev > :last-child {
  flex: 1 1 calc(100% - 33.33%);
  max-width: calc(100% - 33.33%);
}

/* Image styling remains the same */
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.grid_2 img, .grid_2_rev img, .grid_3 img, .grid_1 img{
  padding: 0 5px;
}

`

export default Gallery
