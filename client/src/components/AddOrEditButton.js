import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: ${(props) => (props.size === "medium" ? "40px" : "100%")};
  height: ${(props) => (props.size === "medium" ? "40px" : "auto")};
  background-color: #4caf50;
  border: none;
  border-radius: ${(props) => (props.size === "medium" ? "25px" : "15px 32px")};
  color: white;
  padding: ${(props) => (props.size === "medium" ? "10px" : "15px 32px")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 0px 5px 2px #dbdbdb;
  }
`;

const ButtonEdit = styled(Button)`
  width: 10px;
  height: 10px;
  background-color: #cb9e59;
  padding: unset;
  border-radius: 20px;
`;

const ButtonDelete = styled(Button)`
  width: 10px;
  height: 10px;
  background-color: #bf3939;
  padding: unset;
  border-radius: 20px;
`;

function AddOrEditButton({ text, onClick, size }) {
  switch (size) {
    case "small":
      return <ButtonEdit onClick={onClick} />;
    case "small-delete":
      return <ButtonDelete onClick={onClick} />;
    default:
      return (
        <Button onClick={onClick} size={size}>
          {text}
        </Button>
      );
  }
}

AddOrEditButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "normal", "small-delete"]),
};

AddOrEditButton.defaultProps = {
  size: "normal",
};

export default AddOrEditButton;
