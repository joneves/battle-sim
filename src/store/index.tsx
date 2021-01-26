import { Subject, Subscription } from "rxjs";

export type BattleState = {
  playerHealth: number;
  monsterHealth: number;
  monsterDice: Array<number>;
  playerDice: Array<number>;
};

const subject = new Subject<BattleState>();

const initialState: BattleState = {
  playerHealth: 100,
  monsterHealth: 100,
  monsterDice: [1, 1],
  playerDice: [1, 1],
};

let state = initialState;

const getRandomNumber = (): number => Math.floor(Math.random() * 6) + 1;

const battleStore = {
  init: () => subject.next(state),
  subscribe: (setState: any): Subscription => subject.subscribe(setState),
  rollDice: () => {
    const monsterDice = state.monsterDice.map<number>(getRandomNumber);
    const playerDice = state.playerDice.map<number>(getRandomNumber);

    state = {
      ...state,
      monsterDice,
      playerDice,
    };

    subject.next(state);

    const healthAdjustment =
      playerDice.reduce((total, die) => (total += die), 0) -
      monsterDice.reduce((total, die) => (total += die), 0);

    state = {
      ...state,
      monsterHealth:
        healthAdjustment > 0
          ? state.monsterHealth - healthAdjustment
          : state.monsterHealth,
      playerHealth:
        healthAdjustment < 0
          ? state.playerHealth + healthAdjustment
          : state.playerHealth,
    };

    setTimeout(() => subject.next(state), 2000);
  },
  initialState,
};

export default battleStore;
