import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchAndSearchGateways } from "../store/gateway/actions";

const Bar = styled.div`
  margin: 5px;
`;

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  height: 30px;
  padding: 3px 3px 3px 0px;
  :focus {
    border-bottom: 1px solid black;
    outline: none;
  }
  ::placeholder {
    font-size: 18px;
    color: #adadad;
    font-family: "Raleway";
  }
`;

function GatewaySearch({ placeholder }) {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.gatewayReducers);

  const handleChange = (input) => {
    dispatch(fetchAndSearchGateways(input.target.value));
  };

  return (
    <Bar>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        // value={search}
      />
    </Bar>
  );
}

GatewaySearch.propTypes = {
  fetch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default GatewaySearch;
