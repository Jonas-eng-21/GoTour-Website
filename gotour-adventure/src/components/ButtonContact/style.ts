import { styled } from "styled-components";

export const Button = styled.div`
  .btn {
    position: relative;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-color: #eeeeed;
    border-radius: 80px;
    border: none;
    padding: 0 80px;
    transition: all 0.2s ease;
    justify-content: center;
    align-items: center;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn span {
    position: absolute;
    z-index: 99;
    width: 150px;
    height: 50px;
    border-radius: 80px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 2px;
    color: #eeeeed;
    background-color: #1f1f1f;
    padding: 0 10px;
    transition: all 1.2s ease;
  }

  .btn .container {
    display: flex;
    width: 150px;
    border-radius: 80px;
    line-height: 50px;
  }

  .btn svg {
    padding: 0 5px;
    opacity: 0;
  }

  .btn .container svg:nth-of-type(1) {
    transition-delay: 0.65s;
  }

  .btn .container svg:nth-of-type(2) {
    transition-delay: 0.8s;
  }

  .container svg:nth-of-type(3) {
    transition-delay: 0.5s;
  }

  .btn:hover span {
    opacity: 0;
  }

  .btn:hover svg {
    opacity: 1;
  }
`;
