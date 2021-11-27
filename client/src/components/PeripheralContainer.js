import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Peripheral from "./Peripheral";
import PeripheralHeader from "./PeripheralHeader";
import { fetchPeripherals } from "../store/peripheral/actions";

const Container = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
`;

export default function PeripheralContainer() {
  const { selectedGateway } = useSelector((state) => state.gatewayReducers);
  const { peripherals } = useSelector((state) => state.peripheralReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeripherals(selectedGateway._id));
  }, [dispatch, selectedGateway]);

  return (
    <Body>
      <PeripheralHeader serial={selectedGateway.serial} />
      <Container>
        {peripherals.map((peripheral) => (
          <Peripheral
            uid={peripheral.uid}
            vendor={peripheral.vendor}
            date={peripheral.date}
            status={peripheral.status === 1}
          />
        ))}
      </Container>
    </Body>
  );
}
