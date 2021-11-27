import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function AddButton(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}

AddButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddButton;
