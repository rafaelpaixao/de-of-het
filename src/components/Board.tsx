import "./Board.scss";

import { For, Show, createSignal } from "solid-js";
import { Question, useGame } from "../game";

import { Card } from "./Card";
import { CardStack } from "./CardStack";
import { DeHet } from "../types";
import { DropZone } from "./DropZone";
import { Score } from "./Score";
import { useDragDropContext } from "@thisbeyond/solid-dnd";

export function Board() {
  const { questions, remaining } = useGame();

  const [, { onDragEnd }] = useDragDropContext();

  onDragEnd(({ draggable, droppable }) => {
    if (droppable) {
      questions[draggable.id].setAnswer(droppable.id);
    }
  });

  return (
    <div class={"board"}>
      <Show when={remaining() > 0} fallback={<Score />}>
        <DropZone content="de" />
        <CardStack>
          <For each={questions}>
            {(question, index) => (
              <Show when={question.answer() === undefined}>
                <Card id={index()} content={question.word.content} />
              </Show>
            )}
          </For>
        </CardStack>
        <DropZone content="het" />
      </Show>
    </div>
  );
}
