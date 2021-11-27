import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PeripheralComponent = styled.div`
    width: 140px;
    height: fit-content;
    padding: 10px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 10px;
`;

function Peripheral(props) {
  return (
    <PeripheralComponent>
      <div>
        <b>UID:</b> {props.uid}
      </div>
      <div>
        <b>Vendor:</b> {props.vendor}
      </div>
      <div>
        <b>Date:</b> {props.date}
      </div>
      <div>
        <b>Status:</b> {props.status}
      </div>
    </PeripheralComponent>
  );
}

Peripheral.propTypes = {
  uid: PropTypes.string,
  vendor: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.bool,
};

export default Peripheral;
