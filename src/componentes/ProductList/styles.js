import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100vw;
  height: auto;
`;

const Wrapper = styled.div`
  display: grid;
  padding: 10px 5px;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 10px;
  align-items: center;
  width: 95%;
  max-width: 768px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: rgba(224, 224, 224, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 10px 2px #000000;
  margin-bottom: 5px;
`;

export const Total = styled.div`
  display: flex;
  margin-top: 15px;
  font-weight: bold;
  padding: 1rem;
  width: 95%;
  max-width: 768px;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 1.4rem;
  background-color: rgba(224, 224, 224, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 10px 2px #000000;
`;

export { Container, Wrapper };
