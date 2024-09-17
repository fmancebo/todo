import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { Container, Wrapper } from "./styles";
import currencyFormat from "../../helpers/currency";

function ProductItem({ quantity, description, value, isChecked, onRemove, onToggle }) {
  const total = (parseFloat(quantity) * parseFloat(value)).toFixed(2);

  return (
    <Container>
      <Wrapper onClick={onToggle} isChecked={isChecked}>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          <span>{description}</span>
        </div>
        <div>
          <span>{currencyFormat(value)}</span>
        </div>
        <div>
          {isChecked ? (
            <button className='remove' type='button' aria-label='Delete'>
              <MdDelete
                size={24}
                onClick={(e) => {
                  e.stopPropagation(); // Impede que o clique no ícone acione o clique do item
                  if (onRemove) onRemove(); // Garante que a função seja chamada apenas se estiver definida
                }}
              />
            </button>
          ) : (
            <span>{currencyFormat(total)}</span>
          )}
        </div>
      </Wrapper>
    </Container>
  );
}

ProductItem.propTypes = {
  quantity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool, // Prop para indicar se o item está riscado
  onRemove: PropTypes.func,
  onToggle: PropTypes.func.isRequired, // Função para alternar o estado riscado
};

// Define valores padrão para as props
ProductItem.defaultProps = {
  isChecked: false, // Valor padrão para isChecked
  onRemove: () => {}, // Função padrão vazia para onRemove
};

export default ProductItem;
