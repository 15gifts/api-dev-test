import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Search from "./components/Search";
import Grid from "./components/Grid";
import { getBeers } from "./services/ApiService";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
      <StyledHeader>
        <Search />
      </StyledHeader>
      <Grid />
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(null, mapDispatchToProps)(App);
