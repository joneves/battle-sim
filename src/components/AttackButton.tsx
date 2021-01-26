import React, { FC } from "react";
import GreenButton from "assets/button.png";
import styled from "styled-components";

type Props = {
  onAttack: () => void;
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  & div {
    position: absolute;
    color: #fff;
    font-weight: 700;
    bottom: 90px;
    left: 182px;
    font-size: 21px;
  }
`;

const AttackButton: FC<Props> = ({ onAttack }) => (
  <Wrapper onClick={onAttack}>
    <img src={GreenButton} alt="Attack Button" />
    <div>ATTACK</div>
  </Wrapper>
);

export default AttackButton;
