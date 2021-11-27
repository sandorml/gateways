import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Gateway from "../components/Gateway";
import GatewayContainer from "../components/GatewayContainer";
import PeripheralContainer from "../components/PeripheralContainer";
import { fetchGateways } from "../store/gateway/actions";

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  const { gateways } = useSelector((state) => state.gatewayReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGateways());
  }, [dispatch]);
  return (
    <Layout>
      <GatewayContainer>
        {gateways.map((gateway) => (
          <Gateway name={gateway.name} ip={gateway.ipv4Address} />
        ))}
      </GatewayContainer>
      <PeripheralContainer />
    </Layout>
  );
};

export default Home;
