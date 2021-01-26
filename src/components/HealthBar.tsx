import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  health: number;
};

const Bar = styled.div<Props>`
  position: relative;
  border: solid 1px red;
  height: 400px;
  width: 30px;
  & .fill {
    height: ${(props: Props) => 400 * (props.health / 100) + "px"};
    background-color: red;
    width: 100%;
    position: absolute;
    bottom: 0px;
    transition: height 0.5s linear;
  }

  & .points-text {
    position: absolute;
    bottom: 0px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    width: 30px;
  }
`;

const HealthBar: FC<Props> = ({ health }) => {
  return (
    <div>
      <Bar health={health}>
        <div className="fill"></div>
        <div className="points-text">{health}</div>
      </Bar>
    </div>
  );
};

export default HealthBar;
