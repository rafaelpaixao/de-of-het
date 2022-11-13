import { DeHet, Word } from "../types";
import { JSX, createContext, useContext } from "solid-js";

export class Question {
  word: Word;
  answer?: DeHet;

  constructor(word: Word) {
    this.word = word;
  }

  isCorrect(): boolean {
    return this.answer === this.word.article;
  }
}

interface IGame {
  questions: Question[];
  score: () => number;
}

const GameContext = createContext<IGame>();

export function GameProvider(props: {
  words: Word[];
  children: JSX.Element | JSX.Element[];
}) {
  const questions = props.words.map((word) => new Question(word));

  const score = (): number => {
    return questions.filter((q) => q.isCorrect()).length;
  };

  return (
    <GameContext.Provider value={{ questions, score }}>
      {props.children}
    </GameContext.Provider>
  );
}

export function useGame(): IGame {
  return useContext(GameContext);
}
