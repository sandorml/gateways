import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: ${(props) => (props.small ? "40px" : "100%")} ;
  height: ${(props) => (props.small ? "40px" : "auto")} ;
  background-color: #4caf50;
  border: none;
  border-radius: ${(props) => (props.small ? "25px" : "15px 32px")} ;
  color: white;
  padding: ${(props) => (props.small ? "10px" : "15px 32px")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function AddButton({ text, onClick, small }) {
  return (
    <Button onClick={onClick} small={small}>
      {small?"+":text}
    </Button>
  );
}

AddButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  small: PropTypes.bool,
};

AddButton.defaultProps = {
  small: false,
};

export default AddButton;
