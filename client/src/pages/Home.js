import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Gateway from "../components/Gateway";
import GatewayContainer from "../components/GatewayContainer";
import PeripheralContainer from "../components/PeripheralContainer";
import { fetchGateways, selectGateway } from "../store/gateway/actions";

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  const { gateways } = useSelector((state) => state.gatewayReducers);
  const dispatch = useDispatch();

  const onClickGateway = (gateway)=>{
    dispatch(selectGateway(gateway));
  };

  useEffect(() => {
    dispatch(fetchGateways());
  }, [dispatch]);
  return (
    <Layout>
      <GatewayContainer>
        {gateways.map((gateway) => (
          <Gateway key={gateway.serial} name={gateway.name} ip={gateway.ipv4Address} onClick={()=> onClickGateway(gateway)} />
        ))}
      </GatewayContainer>
      <PeripheralContainer />
    </Layout>
  );
};

export default Home;
