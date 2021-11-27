import React from 'react'
import styled from 'styled-components'
import GatewaySearch from './GatewaySearch';

const Container = styled.div`
    width: 200px;
    justify-content: space-between;
`;


export default function GatewayContainer(props) {
    return (
        <Container>
            <GatewaySearch/>
            {props.children}
        </Container>
        
    )
}
