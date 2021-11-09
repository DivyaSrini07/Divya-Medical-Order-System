import React, { useState } from 'react';
import styled from 'styled-components';

const Medicine = ({ medData }) => {
  const { title, description, sideEffects, imageSrc } = medData;

  return (
    <Wrapper>
      <Title>
        Medicine encyclopedia
      </Title>
      <div className='medicine-wrapper'>
        <div className='medicine-content'>
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
        <div className='medicine-image-wrapper'>
          <img className='medicine-image' src={imageSrc} alt="medicine image" />
        </div>
      </div>
      <div className='medicine-sideeffects'>
        <h2>Side Effects</h2>
        <ul>
          {
            sideEffects && sideEffects.map((sideEffect, index) => (
              <li key={index} className='sideeffect-list'>
                {sideEffect}
              </li>
            ))
          }
        </ul>
      </div>
      <div className='disclaimer-wrapper'>
        <p className='disclaimer'>
          WARNING: No more than 5 units per customer
        </p>
      </div>

      <div className='cart-btn-wrapper'>
        <button className='cart-btn'>
          Add to Cart
        </button>
      </div>
    </Wrapper>
  );
}

export default Medicine;

const Title = styled.h1`
  font-size: 1.75em;
  text-align: center;
  color: #000;
  font-family: serif;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;

  .sideeffect-list {
    padding: 10px 10px;
    color: #4f4f4f;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    line-height: 22px;
    text-decoration: none;
  }

  .medicine-wrapper {
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    grid-column-gap: 1rem;
  }

  .medicine-content {
    display: flex;
    flex-direction: column;
    margin: 10px 20px 10px 50px;
  }

  .medicine-image-wrapper {
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .medicine-image {
    width: 400px;
    height: 400px;
  }

  .medicine-sideeffects {
    margin: 10px 10px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }

  .cart-btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .cart-btn {
    margin: 30px 10px 30px 40px;
    padding: 15px 40px;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    border-radius: 6px;
    border: 1px solid #006cd1;
    background: #006cd1;
    color: #fff;
    text-align: center;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1px 3px 0 rgb(187 187 187);
    }
  }

  .disclaimer {
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    margin: 0;
  }

  .disclaimer-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .disclaimer-wrapper {
    display: flex;
    flex-direction: row;
    margin: 20px 10px 10px 40px;
    border: 1px solid #000;
    width: fit-content;
    padding: 10px 10px;
  }
`;

