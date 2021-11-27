import React from "react";
import styled from "styled-components";

import GatewayContainer from "../components/GatewayContainer";
import PeripheralContainer from "../components/PeripheralContainer";

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  
  return (
    <Layout>
      <GatewayContainer>
        
      </GatewayContainer>
      <PeripheralContainer />
    </Layout>
  );
};

export default Home;
