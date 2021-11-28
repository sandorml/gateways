import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import AddOrEditGateway from "./AddOrEditGateway";
import GatewaySearch from "./GatewaySearch";
import Gateway from "./Gateway";
import {
  fetchGateways,
  selectGateway,
  deleteGateway,
} from "../../store/gateway/actions";
import AddOrEditButton from "../AddOrEditButton";

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

const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function GatewayContainer() {
  const { gateways, selectedGateway } = useSelector(
    (state) => state.gatewayReducers
  );
  const dispatch = useDispatch();

  const onClickGateway = (gateway) => {
    dispatch(selectGateway(gateway));
  };

  const onClickDeleteGateway = (gateway) => {
    dispatch(deleteGateway(gateway));
  };

  useEffect(() => {
    dispatch(fetchGateways());
  }, [dispatch]);
  return (
    <Container>
      <GatewaySearch placeholder={"Search Gateway"} />
      <Items>
        {gateways.map((gateway) => (
          <Row>
            <Column>
              <AddOrEditGateway gateway={gateway} />
              <AddOrEditButton
                size={"small-delete"}
                onClick={() => onClickDeleteGateway(gateway)}
              />
            </Column>
            <Gateway
              key={gateway.serial}
              name={gateway.name}
              ip={gateway.ipv4Address}
              selected={gateway.serial === selectedGateway.serial}
              onClick={() => onClickGateway(gateway)}
            />
          </Row>
        ))}
      </Items>
      <AddContainer>
        <AddOrEditGateway />
      </AddContainer>
    </Container>
  );
}
