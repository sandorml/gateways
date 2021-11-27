import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PeripheralComponent = styled.div`
    width: 140px;
    height: fit-content;
    padding: 10px;
    margin: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    justify-content: space-around;
`;

function Peripheral({uid, vendor, date, status}) {
  return (
    <PeripheralComponent>
      <div>
        <b>UID:</b> {uid}
      </div>
      <div>
        <b>Vendor:</b> {vendor}
      </div>
      <div>
        <b>Date:</b> {date}
      </div>
      <div>
        <b>Status:</b> {status}
      </div>
    </PeripheralComponent>
  );
}

Peripheral.propTypes = {
  uid: PropTypes.string,
  vendor: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.bool
};

export default Peripheral;
