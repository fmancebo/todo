import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100vw;
  justify-content: center;
  flex-direction: row;
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  padding: 0 20px;
  position: sticky;
  z-index: 0;
`;

export const Wrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0 auto;
`;

export const InputQuants = styled.input`
  display: flex;
  width: auto;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.003);
  font-size: 1.25rem;
  font-style: italic;
  line-height: 50px;
  border: none;
  margin: 0 auto;
  padding-left: 5px;

  &::placeholder {
    font-size: 1rem;
    /* color: black; */
    /* font-weight: bold; */
  }
`;

export const ButtonInput = styled.button`
  height: 40px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #4caf50;
  border: 2px solid #388e3c;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  z-index: 10;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
  }
`;
