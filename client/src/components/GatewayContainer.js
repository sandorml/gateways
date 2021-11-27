import React from 'react'
import styled from 'styled-components'
import AddGateway from './AddGateway';

const Container = styled.div`
    width: 200px;
    height: 100%;
    margin-right: 10px;
    padding: 10px;
    border-top-right-radius:  10px;
    border-bottom-right-radius:  10px;
    box-shadow: 0px 2px 5px 2px #dbdbdb;
`;
const Items = styled.div`
`;


export default function GatewayContainer(props) {
    return (
        <Container>
            <GatewaySearch placeholder={"Search Gateway"}/>
            <Items>
            {props.children}
            </Items>
        </Container>
        
    )
}
