import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 400px;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 3px;
`;

function Search() {
  const [state, setState] = useState("");

  return (
    <StyledInput
      type={"text"}
      placeholder={"Search beers"}
      onChange={(e) => setState(e.currentTarget.value)}
      value={state}
    />
  );
}

export default Search;