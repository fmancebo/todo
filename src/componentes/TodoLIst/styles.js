import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 1rem auto;
  align-items: center;
  padding: 0;
`;

export const ItemList = styled.li`
  display: flex;
  width: 100%;
  font-weight: bold;
  align-items: center;
  background-color: #e0e0e033;
  backdrop-filter: blur(20px);
  padding: 0.5rem;
  border: 1px solid #1d1e21;
  margin-bottom: 5px;
  box-shadow: 0px 0px 10px 2px #000000;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: calc(101%);
  }

  .todo.checked {
    color: #b2bec3;
    text-decoration: line-through;
  }

  .remove {
    background-color: transparent;
    border: none;
    color: #690004;
    cursor: pointer;
    outline: none;
    width: 50px;

    &:active {
      animation: ${rotate} 0.5s ease-in-out;
      color: red;
      cursor: pointer;
    }
  }
`;

export const Dados = styled.span`
  flex: 1;
  outline: none;
  font-size: 1.5rem;
  word-break: break-all;
  transition: color 0.3s;
`;
export const BtnClear = styled.button`
  display: flex;
  margin-top: 1.5rem;
  width: auto;
  font-weight: bold;
  align-items: center;
  background-color: #dbefef;
  backdrop-filter: blur(20px);
  border: 1px solid #1d1e21;
  margin-bottom: 5px;
  box-shadow: 0px 0px 1px 1px #cd0000;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    scale: calc(101%);
  }
  &:active {
    box-shadow: 0px 0px 10px 1px #cd0000;
    background-color: #cd000033;
  }
`;
