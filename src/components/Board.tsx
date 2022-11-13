import "./Board.scss";

import { Card } from "./Card";
import { CardStack } from "./CardStack";
import { For } from "solid-js";
import { Option } from "./Option";
import { useGame } from "../game";

export function Board() {
  const { questions } = useGame();
  return (
    <div class="board">
      <Option name="DE" />
      <CardStack>
        <For each={questions}>
          {(question) => <Card content={question.word.content} />}
        </For>
      </CardStack>
      <Option name="HET" />
    </div>
  );
}
