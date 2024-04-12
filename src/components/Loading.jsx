import React from 'react'
import style from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='container'>
      <div className='loading'></div>
    </Wrapper>
  )
}

const Wrapper = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-top-color: var(--blue);
  animation: spinner 0.6s linear infinite;
}
`
export default Loading