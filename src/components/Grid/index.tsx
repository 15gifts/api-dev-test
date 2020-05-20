import React from "react";
import styled from "styled-components";
import Item from "./Item";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Grid() {
  return (
    <StyledGrid>
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
      <Item beer={{ url: "aa", title: "bb", subTitle: "cc" }} />
    </StyledGrid>
  );
}

export default Grid;
