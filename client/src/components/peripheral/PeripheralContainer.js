import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import Peripheral from "./Peripheral";
import PeripheralHeader from "./PeripheralHeader";
import AddOrEditPeripheral from "./AddOrEditPeripheral";
import {
  fetchPeripherals,
  deletePeripheral,
} from "../../store/peripheral/actions";
import AddOrEditButton from "../AddOrEditButton";

const Container = styled.div`
  height: fit-content;
  display: flex;
  justify-content: start;
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

  const onClickDeletePeripheral = (peripheral) => {
    dispatch(deletePeripheral(peripheral));
  };
  useEffect(() => {
    dispatch(fetchPeripherals(selectedGateway._id));
  }, [dispatch, selectedGateway]);

  return (
    <Body>
      <PeripheralHeader gateway={selectedGateway} />
      <Notification />
      <Container>
        {peripherals.map((peripheral) => (
          <Peripheral
            key={peripheral._id}
            uid={peripheral.uid}
            vendor={peripheral.vendor}
            date={peripheral.dateCreated}
            status={peripheral.status === 1}
            edit={<AddOrEditPeripheral peripheral={peripheral} />}
            remove={
              <AddOrEditButton
                size={"small-delete"}
                onClick={() => onClickDeletePeripheral(peripheral)}
              />
            }
          />
        ))}
      </Container>
    </Body>
  );
}

/**
 * Component to show a notification if the gateway has the maximun amount of peripherals
 */
function Notification() {
  const { maxPeripherals } = useSelector((state) => state.peripheralReducers);
  useEffect(() => {
    if (maxPeripherals) {
      NotificationManager.info(
        "Gateway has reached the maximun of peripherals",
        "",
        3000
      );
    }
  }, [maxPeripherals]);

  return <NotificationContainer />;
}
