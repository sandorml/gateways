import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";

const PeripheralComponent = styled.div`
  width: 160px;
  height: fit-content;
  padding: 10px;
  margin: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  justify-content: space-around;
`;

const Status = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 5px;
  float: right;
`;
const Enabled = styled(Status)`
  background-color: #4caf50;
`;
const Disabled = styled(Status)`
  background-color: #bf3939;
`;

function Peripheral({ uid, vendor, date, status }) {
  return (
    <PeripheralComponent>
      <div>
        <b>UID:</b> {uid}
      </div>
      <div>
        <b>Vendor:</b> {vendor}
      </div>
      <div>
        <b>Date:</b> {moment(date).format("MMM Do YY")}
      </div>
      <div>
         {status ? <Enabled /> : <Disabled />}
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
