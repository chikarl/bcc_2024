import React, { useState } from 'react';
import { question } from '../utils/helper';
import SingleQuestion from './Question';
import styled from 'styled-components';

function FaqSection() {
  const [questions, setQuestions] = useState(question);
  return (
    <Wrapper>
      <div className='container'>
        <h2>FAQS</h2>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
margin: 128px 0;

`
export default FaqSection;
