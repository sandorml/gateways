import React from 'react'

import styled from 'styled-components'


const GatewayComponent = styled.div`
    width: 100px;
    height: 50px;
`;


export default function Gateway(props) {
    return (
        <GatewayComponent>
        <div>Name</div>        
        <div>192.123.3.123</div>        
        </GatewayComponent>
    )
}
