import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GatewayComponent = styled.button`
  border: none;
  text-decoration: none;
  width: 80%;
  height: 50px;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 2px #dbdbdb;
  margin-left: ${(props) => (props.selected ? "30px" : "15px")};
  background-color: ${(props) => (props.selected ? "#5baf4c21" : "white")};

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 2px 5px 2px #c9c9c9;
  }
`;

const IpContainer = styled.div`
  font-size: smaller;
`;


function Gateway({ name, ip, onClick, selected }) {
  return (
    <GatewayComponent selected={selected} onClick={onClick}>
      <div>{name}</div>
      <IpContainer>{ip}</IpContainer>
    </GatewayComponent>
  );
}

Gateway.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Gateway;
