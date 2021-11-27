import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Gateway from "../components/Gateway";
import GatewayContainer from "../components/GatewayContainer";
import PeripheralContainer from "../components/PeripheralContainer";


const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  // const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchStudents());
  }, [dispatch]);
  return (
    <Layout>
      <GatewayContainer>
        <Gateway />
        <Gateway />
        <Gateway />
      </GatewayContainer>
      <PeripheralContainer/>
    </Layout>
  );
};

export default Home;
