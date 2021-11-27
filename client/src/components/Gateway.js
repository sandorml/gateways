import React from "react";

import styled from "styled-components";

const GatewayComponent = styled.div`
  width: 80%;
  height: 50px;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 2px #dbdbdb;
`;

const Row = styled.div`
  div {
    display: inline;
  }
`;

const IpContainer = styled.div`
font-size: smaller;
`;

export default function Gateway(props) {
  return (
    <GatewayComponent>
      {/* <Row> */}
        <div>Name</div>
        <IpContainer>192.123.3.123</IpContainer>
      {/* </Row> */}
    </GatewayComponent>
  );
}
