import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

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

function GatewaySearch(props) {
  const { fetch, placeholder } = props;
  const dispatch = useDispatch();

  const handleChange = (search) => {
    // dispatch(fetch(search.target.value));
  };

  return (
    <Bar>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Bar>
  );
}

GatewaySearch.propTypes = {
  fetch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default GatewaySearch;
