import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Peripheral from "./Peripheral";
import PeripheralHeader from "./PeripheralHeader";
import { selectGateway } from "../store/gateway/actions";

const Container = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function PeripheralContainer() {
  const { selectedGateway } = useSelector((state) => state.gatewayReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchGateways());
  }, [dispatch, selectGateway]);

  return (
    <div>
      <PeripheralHeader serial={selectedGateway.serial} />
      <Container>
        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />
        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />
        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />
        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />

        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />
        <Peripheral
          uid={"hoa"}
          vendor={"vendor"}
          date={"23/2/1122"}
          status={true}
        />
      </Container>
    </div>
  );
}
