import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
`;

const Wrapper = styled.div`
  display: grid;
  padding: 10px 20px;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  column-gap: 10px;
  font-size: 1.3rem;
  align-items: center;
  width: 95%;
  max-width: 768px;
  font-weight: bold;
  background-color: rgba(224, 224, 224, 0.8);
  backdrop-filter: blur(20px);
  margin-bottom: 3px;
  box-shadow: 0px 0px 10px 1px #000000;
  transition: 0.5s ease;

  &:hover {
    scale: calc(101%);
    cursor: pointer;
  }

  ${(props) =>
    props.isChecked &&
    `
      color: #7d898d;
      text-decoration: line-through;

    `}
`;

export { Container, Wrapper };
