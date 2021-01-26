import React, { FC } from "react";
import Dice from "./Dice";
import styled from "styled-components";
import player from "assets/player.png";
import HealthBar from "./HealthBar";

type Props = {
  health: number;
  dice: Array<number>;
};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const Inner = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  & .image {
    height: 300px;
  }
`;

const Player: FC<Props> = ({ health, dice }) => {
  console.log(dice);
  return (
    <Wrapper>
      <div>
        <HealthBar health={health} />
      </div>
      <Inner>
        <div className="image">
          <img src={player} width={300} alt="Player" />
        </div>
        <div>
          <Dice value={dice} />
        </div>
      </Inner>
    </Wrapper>
  );
};

export default Player;
