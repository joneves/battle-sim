import React, { FC, useState, useLayoutEffect } from "react";
import styled from "styled-components";

import battleStore from "store";
import AttackButton from "./AttackButton";
import Contender from "./Contender";

import monster from "assets/monster.png";
import player from "assets/player.png";

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;

type ResultProps = {
  isWinner: boolean;
  isLoser: boolean;
};

const ResultText = styled.div<ResultProps>`
  height: 200px;
  color: ${({ isWinner, isLoser }) =>
    isWinner ? "green" : isLoser ? "red" : "white"};
  font-size: 6rem;
  display: ${({ isWinner, isLoser }) =>
    isWinner || isLoser ? "block" : "none"};
`;

const CenterSection = styled.div`
  width: 450px;
  text-align: center;
`;

type Props = {};

const Main: FC<Props> = () => {
  const onAttackClick = () => {
    if (monsterHealth > 0 && playerHealth > 0) battleStore.rollDice();
  };
  const [battleState, setBattleState] = useState(battleStore.initialState);
  const { playerHealth, playerDice, monsterHealth, monsterDice } = battleState;

  useLayoutEffect(() => {
    battleStore.subscribe(setBattleState);
    battleStore.init();
  }, []);

  return (
    <Wrapper>
      <div>
        <Contender type="player" health={playerHealth} dice={playerDice} imageUrl={player} altText="Player"  />
      </div>
      <CenterSection>
        <ResultText isWinner={monsterHealth <= 0} isLoser={playerHealth <= 0}>
          {monsterHealth <= 0 ? "You Win !!" : "Game Over !!"}
        </ResultText>
        <AttackButton onAttack={onAttackClick} />
      </CenterSection>
      <div>
        <Contender type="monster" health={monsterHealth} dice={monsterDice} imageUrl={monster} altText="Monster" />
      </div>
    </Wrapper>
  );
};

export default Main;
