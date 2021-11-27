import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAndSearchGateways } from "../store/gateway/actions";
import Input from "./Input";

const Bar = styled.div`
  margin: 5px;
`;

function GatewaySearch({ placeholder }) {
  const dispatch = useDispatch();

  const handleChange = (input) => {
    dispatch(fetchAndSearchGateways(input.target.value));
  };

  return (
    <Bar>
      <Input type="text" placeholder={placeholder} onChange={handleChange} />
    </Bar>
  );
}

GatewaySearch.propTypes = {
  fetch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default GatewaySearch;
