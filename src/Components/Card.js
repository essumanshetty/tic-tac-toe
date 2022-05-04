import React from "react";
import styled from "styled-components";

const Div = styled.div`
  filter: drop-shadow(0 3px 6px #ccc);
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Card({ state, index, clickHandler }) {
  return (
    <Div onClick={() => clickHandler(index)}>
      <span>{state}</span>
    </Div>
  );
}

export default Card;
