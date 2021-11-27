import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GatewayComponent = styled.button`
  border: none;
  text-decoration: none;
  background-color: white;
  width: 80%;
  height: 50px;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 2px #dbdbdb;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 2px 5px 2px #c9c9c9;
  }
`;

const IpContainer = styled.div`
  font-size: smaller;
`;

function Gateway({ name, ip, onClick }) {
  return (
    <GatewayComponent onClick={onClick}>
      <div>{name}</div>
      <IpContainer>{ip}</IpContainer>
    </GatewayComponent>
  );
}

Gateway.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Gateway;
