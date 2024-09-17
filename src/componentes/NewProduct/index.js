/* eslint-disable no-alert */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { MdAddToPhotos } from "react-icons/md";
import { Container, Wrapper, InputQuants, ButtonInput } from "./styles";

function NewMarket({ onAddProduct }) {
  const [quant, setQuant] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!quant || !description || !value) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newProduct = { quant, description, value, id: uuidv4() };
    onAddProduct(newProduct);
    setQuant("");
    setDescription("");
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <Wrapper>
        {/* <Label htmlFor='quantidade'> */}
        {/* Quant.: */}
        <InputQuants
          id='quantidade'
          placeholder='Quant.'
          type='number'
          value={quant}
          onChange={(e) => setQuant(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ width: "70px" }}
        />
        {/* </Label> */}
        {/* <Label htmlFor='descricao'>
          Desc.: */}
        <InputQuants
          id='descricao'
          placeholder='Descrição'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ width: "110px" }}
        />
        {/* </Label> */}
        {/* <Label htmlFor='valor'>
          Valor: */}
        <InputQuants
          id='valor'
          placeholder='Valor'
          type='number'
          step='0.01'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "80px",
            marginRight: "20px",
          }}
        />
        {/* </Label> */}
        <ButtonInput type='button' onClick={handleSubmit}>
          <MdAddToPhotos size='35px' />
        </ButtonInput>
      </Wrapper>
    </Container>
  );
}

NewMarket.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};

export default NewMarket;
