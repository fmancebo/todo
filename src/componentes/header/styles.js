import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #110229;
  color: white;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  justify-content: space-between;
  z-index: 3;
`;

export const Button = styled.button`
  height: 40px;
  width: auto;
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.33);
  margin-top: 4px;
  width: max-content;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  z-index: 10;
  padding: 8px 16px;
  cursor: pointer;
  color: #000;

  &:hover {
    background-color: #f0f0f0;
  }
`;
