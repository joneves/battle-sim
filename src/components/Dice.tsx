import React, { FC, useRef, useEffect } from "react";

type Props = {
  value: Array<number>;
};

const Dice: FC<Props> = ({ value }) => {
  const die1 = useRef<HTMLOListElement>(null);
  const die2 = useRef<HTMLOListElement>(null);
  const dice = [die1, die2];

  useEffect(() => {
    dice.forEach((die) => {
      toggleClasses(die.current as HTMLOListElement);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const toggleClasses = (die: HTMLOListElement) => {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  };

  return (
    <div className="dice" style={{ width: 300 }}>
      {dice.map((die, index) => (
      <ol
        key={`die-${index}`}
        ref={die}
        className="die-list even-roll"
        data-roll={value[index]}
        id={`die-${index}`}
      >
        <li className="die-item" data-side="1">
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="2">
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="3">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="4">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="5">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="6">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
      </ol>
      ))
    }
    
    </div>
  );
};

export default Dice;
