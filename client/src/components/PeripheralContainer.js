import React from "react";
import styled from "styled-components";
import Peripheral from "./Peripheral";

const Container = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function PeripheralContainer() {
  return (
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
  );
}
