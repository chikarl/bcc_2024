import React, { useState } from 'react';
import addIcon from '../assets/Add.svg';
import subtractIcon from '../assets/Subtract.svg';
import styled from 'styled-components';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
    <article className='question'>
      <header>
        
        {showInfo ? 
        <div onClick={() => setShowInfo(!showInfo)}>
        <h4 style={{color: "#4C25EF"}} >{title}</h4>
        <button className='btn'>
          <img src={subtractIcon} alt="" />
        </button>
        </div>
        :
        <div onClick={() => setShowInfo(!showInfo)}>
        <h4 >{title}</h4>
        <button className='btn' >
          <img src={addIcon}  />
        </button>
        </div>
        }
      </header>
      {showInfo && <p>{info}</p>}
    </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
div{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.question {
  padding: 48px 0;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
}
.question h4 {
  text-transform: none;
  line-height: 1.5;
  font-size: 36px;
  font-family: 'Product Sans Medium';
}
.question p {
  color: var(--clr-grey-3);
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.question header h4 {
  margin-bottom: 0;
}
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
}

`
export default Question;
