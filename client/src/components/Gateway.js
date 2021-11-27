import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GatewayComponent = styled.div`
  width: 80%;
  height: 50px;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 2px #dbdbdb;
`;

// const Row = styled.div`
//   div {
//     display: inline;
//   }
// `;

const IpContainer = styled.div`
font-size: smaller;
`;

function Gateway({name, ip}) {
  return (
    <GatewayComponent>
      {/* <Row> */}
        <div>{name}</div>
        <IpContainer>{ip}</IpContainer>
      {/* </Row> */}
    </GatewayComponent>
  );
}


Gateway.propTypes = {
  name: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
};

export default Gateway;
