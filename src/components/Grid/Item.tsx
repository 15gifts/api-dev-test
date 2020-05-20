import React from "react";
import styled from "styled-components";
import { SingleBeerProps } from "../../redux/model";

const StyledItem = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  padding: 5px;
  margin: 20px;
  border: 1px solid;
  border-radius: 5px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-size: 12px;
  color: gray;
`;

const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Item({ beer }: SingleBeerProps) {
  return (
    <StyledItem>
      <img src={beer.url} />
      <Title>{beer.title}</Title>
      <SubTitle>{beer.subTitle}</SubTitle>
      <FlexEndContainer>
        <button onClick={() => alert("Showing details somehow")}>details</button>
      </FlexEndContainer>
    </StyledItem>
  );
}

export default Item;
