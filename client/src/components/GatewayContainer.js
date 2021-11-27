import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import AddGateway from "./AddGateway";
import GatewaySearch from "./GatewaySearch";
import Gateway from "../components/Gateway";
import { fetchGateways, selectGateway } from "../store/gateway/actions";

const Container = styled.div`
  width: 250px;
  height: 100%;
  margin-right: 10px;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 5px 2px #dbdbdb;
`;
const Items = styled.div`
  width: 250px;
  height: 75%;
  overflow-y: auto;
`;

const AddContainer = styled.div`
  position: absolute;
  bottom: 10px;
  margin: 10px;
  width: 240px;
`;

export default function GatewayContainer() {
  const { gateways, selectedGateway } = useSelector(
    (state) => state.gatewayReducers
  );
  const dispatch = useDispatch();

  const onClickGateway = (gateway) => {
    dispatch(selectGateway(gateway));
  };

  useEffect(() => {
    dispatch(fetchGateways());
  }, [dispatch]);
  return (
    <Container>
      <GatewaySearch placeholder={"Search Gateway"} />
      <Items>
        {gateways.map((gateway) => (
          <Gateway
            key={gateway.serial}
            name={gateway.name}
            ip={gateway.ipv4Address}
            onClick={() => onClickGateway(gateway)}
            selected={gateway.serial === selectedGateway.serial}
          />
        ))}
      </Items>
      <AddContainer>
        <AddGateway />
      </AddContainer>
    </Container>
  );
}
