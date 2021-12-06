import styled from "styled-components";

export default styled.input`
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
