import React from "react";
import PropTypes from "prop-types";
import { Container, Wrapper, Total } from "./styles";
import ProductItem from "../ProductItem";
import currencyFormat from "../../helpers/currency";

export default function ProductList({ products, onRemoveProduct, onToggleProduct }) {
  const calculateTotal = () =>
    products
      .reduce((acc, item) => {
        if (!item.isChecked) {
          // Verifica se o item está riscado
          const itemTotal = parseFloat(item.quant) * parseFloat(item.value);
          return acc + itemTotal;
        }
        return acc;
      }, 0)
      .toFixed(2);

  return (
    <Container>
      <Wrapper>
        <div>QUANT.</div>
        <div>DESCRIÇÃO</div>
        <div>VALOR</div>
        <div>TOTAL</div>
      </Wrapper>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          quantity={product.quant}
          description={product.description}
          value={product.value}
          isChecked={product.isChecked} // Passa o estado riscado
          onRemove={() => onRemoveProduct(product)}
          onToggle={() => onToggleProduct(product)} // Passa a função de alternar
        />
      ))}
      <Total>
        <div>Total</div>
        <div>
          <span>{currencyFormat(calculateTotal())}</span>
        </div>
      </Total>
    </Container>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      quant: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      isChecked: PropTypes.bool, // Adiciona a validação do estado riscado
    }),
  ).isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
  onToggleProduct: PropTypes.func.isRequired, // Adiciona a validação da função de alternar
};
