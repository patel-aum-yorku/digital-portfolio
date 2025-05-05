// src/components/SendButton.jsx
import React from 'react';
import styled from 'styled-components';

export default function SendButton() {
  return (
    <StyledWrapper>
      <button type="submit" className="button">
        <span className="text">Send Message</span>
        <span className="icon">
          <svg viewBox="0 0 512 512" width="20px" aria-hidden="true">
            <path
              d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 54px;
    background: transparent;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    border-radius: 36px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }
  .button::after {
    content: '';
    position: absolute;
    top: 1px; left: 1px; right: 1px; bottom: 1px;
    border: 1px solid #FFB400;
    border-radius: 36px;
    z-index: 2;
  }
  .button::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background-color: #FFB400;
    transition: transform 0.3s ease-out;
    z-index: 1;
  }
  .button:hover::before {
    transform: translateX(100%);
  }
  .text {
    z-index: 2;
    padding-right: 44px;
  }
  .icon {
    position: absolute;
    right: 0; top: 50%;
    transform: translateY(-50%);
    width: 54px; height: 54px;
    background-color: #FFB400;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 3;
  }
`;
