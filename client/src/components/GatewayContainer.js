import React from "react";
import styled from "styled-components";
import AddButton from "./AddButton";
import GatewaySearch from "./GatewaySearch";

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

export default function GatewayContainer(props) {
  return (
    <Container>
      <GatewaySearch placeholder={"Search Gateway"} />
      <Items>
        {props.children}
      </Items>
      <AddContainer>
        <AddButton onClick={() => alert("hello")} text={"Add Gateway"} />
      </AddContainer>
    </Container>
  );
}
