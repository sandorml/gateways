import React from "react";
import styled from "styled-components";

import GatewayContainer from "../components/gateway/GatewayContainer";
import PeripheralContainer from "../components/peripheral/PeripheralContainer";

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  
  return (
    <Layout>
      <GatewayContainer/>        
      <PeripheralContainer />
    </Layout>
  );
};

export default Home;
