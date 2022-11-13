import "./Board.scss";

import { For, Show, createSignal } from "solid-js";
import { Question, useGame } from "../game";

import { Card } from "./Card";
import { CardStack } from "./CardStack";
import { DeHet } from "../types";
import { DropZone } from "./DropZone";
import { Score } from "./Score";

export function Board() {
  const { questions, remaining } = useGame();

  const [dragged, setDragged] = createSignal<Question>();

  const onDrop = (answer: DeHet) => {
    dragged()?.setAnswer(answer);
    setDragged();
  };

  return (
    <div class={"board"}>
      <Show when={remaining() > 0} fallback={<Score />}>
        <DropZone content="de" onDrop={() => onDrop("de")} />
        <CardStack>
          <For each={questions}>
            {(question) => (
              <Show when={question.answer() === undefined}>
                <Card
                  content={question.word.content}
                  onDragStart={() => setDragged(question)}
                  onDragEnd={() => setDragged()}
                />
              </Show>
            )}
          </For>
        </CardStack>
        <DropZone content="het" onDrop={() => onDrop("het")} />
      </Show>
    </div>
  );
}
