import React, { useState } from "react";
import { HiOutlinePencilAlt, HiOutlineChevronDown } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Button, Dropdown, DropdownItem } from "./styles";

export default function Header({ onSortAsc, onSortDesc }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleSortAsc = () => {
    onSortAsc();
    setMenuAberto(false);
  };

  const handleSortDesc = () => {
    onSortDesc();
    setMenuAberto(false);
  };

  return (
    <Container>
      <h1>
        <Link to='/'>
          Sua Lista
          <HiOutlinePencilAlt style={{ marginLeft: "10px" }} />
        </Link>
      </h1>
      <Link to='/market'>
        <FaShoppingCart size={30} />
      </Link>
      <div style={{ position: "relative" }}>
        <Button onClick={alternarMenu}>
          A-Z <HiOutlineChevronDown style={{ marginLeft: "5px" }} />
        </Button>
        {menuAberto && (
          <Dropdown>
            <DropdownItem onClick={handleSortAsc}>A-Z</DropdownItem>
            <DropdownItem onClick={handleSortDesc}>Z-A</DropdownItem>
          </Dropdown>
        )}
      </div>
    </Container>
  );
}

Header.propTypes = {
  onSortAsc: PropTypes.func.isRequired,
  onSortDesc: PropTypes.func.isRequired,
};
