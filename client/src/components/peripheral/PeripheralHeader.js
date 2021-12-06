import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AddOrEditPeripheral from "./AddOrEditPeripheral";

const Container = styled.div`
  margin-left: -10px;
  height: 30px;
  width: 96.8%;
  padding: 20px;
  box-shadow: inset 0px 0px 5px 2px #dbdbdb;
`;

const Text = styled.div`
  display: inline;
  font-size: x-large;
`;
const Actions = styled.div`
  display: inline;
  float: right;
  margin-right: 22px;
`;

function PeripheralHeader({ gateway }) {
  return (
    <Container>
      <Text>
        <b>Serial:</b> {gateway?.serial}
      </Text>
      <Actions>
        <AddOrEditPeripheral />
      </Actions>
    </Container>
  );
}

PeripheralHeader.propTypes = {
  gateway: PropTypes.object,
};

export default PeripheralHeader;
