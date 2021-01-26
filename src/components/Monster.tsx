import React, { FC, useRef, useEffect } from "react";
import monster from "assets/monster.png";
import styled from "styled-components";
import Dice from "./Dice";
import HealthBar from "./HealthBar";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const Inner = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  & .image {
    height: 300px;
  }
`;

type HitCountProps = {
  hitCount: number;
}

const HitCount = styled.div<HitCountProps>`
  width: 8rem;
  font-size: 4rem;
  color: red;
  visibility: ${({hitCount}) => hitCount === 0 ? "hidden": "visible"}
`;

type Props = {
  health: number;
  dice: Array<number>;
};

const Monster: FC<Props> = ({ health, dice }) => {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = health;;
  }, [health]);

  const hitCount: number = ref.current ? ref.current - health : 0

  return (
    <Wrapper >
      <HitCount hitCount={hitCount}>-{hitCount}</HitCount>
      <Inner>
        <div className={`image ${hitCount > 0 ? "hit" : ""}`}>
          <img src={monster} width={300} alt="Monster" />
        </div>
        <div>
          <Dice value={dice} />
        </div>
      </Inner>
      <div>
        <HealthBar health={health} />
      </div>
    </Wrapper>
  );
};

export default Monster;
