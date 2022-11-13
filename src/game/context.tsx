import { JSX, createContext, createSignal, useContext } from "solid-js";

import { Word } from "../types";

export interface Question {
  word: Word;
  answer(): string;
  setAnswer(value: string): void;
  isCorrect(): boolean;
}

interface IGame {
  questions: Question[];
  remaining: () => number;
  score: () => number;
}

const GameContext = createContext<IGame>();

function createQuestion(word: Word): Question {
  const [answer, setAnswer] = createSignal<string>();
  const isCorrect = (): boolean => answer() === word.article;

  return {
    word,
    answer,
    setAnswer,
    isCorrect,
  };
}

export function GameProvider(props: {
  words: Word[];
  children: JSX.Element | JSX.Element[];
}) {
  const questions = props.words.map(createQuestion);

  const score = (): number => {
    return questions.filter((q) => q.isCorrect()).length;
  };

  const remaining = (): number =>
    questions.filter((q) => q.answer() === undefined).length;

  return (
    <GameContext.Provider value={{ questions, score, remaining }}>
      {props.children}
    </GameContext.Provider>
  );
}

export function useGame(): IGame {
  return useContext(GameContext);
}
