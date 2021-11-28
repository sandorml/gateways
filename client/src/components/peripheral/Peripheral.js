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

const Enabled = styled.div`
  color: #4caf50;
`;
const Disabled = styled.div`
  color: #bf3939;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowActions = styled(Row)`
  gap: 10px;
`;

function Peripheral({ uid, vendor, date, status, edit, remove }) {
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
      <Row>
        {status ? <Enabled>Online</Enabled> : <Disabled>Offline</Disabled>}
        <RowActions>{edit} {remove}</RowActions>
      </Row>
    </PeripheralComponent>
  );
}

Peripheral.propTypes = {
  uid: PropTypes.string,
  vendor: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.bool,
  edit: PropTypes.node,
};

export default Peripheral;
