import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { gallery } from '../utils/galleryData';



function Gallery() {


  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc ] = useState('');
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModel(true)
  }

  return (
    <Wrapper>
      <div className={model? "model open" : 'model'}>
        <FontAwesomeIcon icon={faMultiply} onClick={()=> setModel(false)} />
        <img src={tempImgSrc} />
      </div>

      <div className='container'>
        <div className='gallery'>
        {gallery.map((item, index) => {
          return(
            <div className='pics' key={index} onClick={()=>{
              getImg(item.imgSrc)
            }}>
              <img src={item.imgSrc} />
            </div>
          )
        })}

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 10px 0 100px 0;
img{
  width: 100%;
}
.gallery{
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33.33%;
  -moz-column-width: 33.33%;
  column-width: 33.33%;
  /* padding: 0 20px; */
}
.gallery .pics{
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
}
.gallery .pics:hover{
  filter: opacity(.8);
}
@media (max-width: 991px) {
  .gallery{
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}
}
@media (max-width: 480px) {
  .gallery{
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  -webkit-column-width: 100%;
  -moz-column-width: 100%;
  column-width: 100%;
}
}

.model{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;
}
.model.open{
  visibility: visible;
  opacity: 1;
  transform: scale(1);

}
.model img{
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 0 auto;
}
.model.open svg{
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  border-color: rgba(0,0,0,0.4);
  color: #fff;
}
`

export default Gallery
