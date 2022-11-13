import "./Board.scss";

import { For, Show } from "solid-js";

import { Card } from "./Card";
import { CardStack } from "./CardStack";
import { DeHet } from "../types";
import { Draggable } from "./Draggable";
import { DropZone } from "./DropZone";
import { Score } from "./Score";
import { useDragDropContext } from "@thisbeyond/solid-dnd";
import { useGame } from "../game";

export function Board() {
  const { questions, remaining } = useGame();

  const [, { onDragEnd, onDragMove }] = useDragDropContext();

  onDragEnd(({ draggable, droppable }) => {
    if (droppable) {
      questions[draggable.id].setAnswer(droppable.id);
    }
  });

  onDragMove(({ draggable }) => {
    const diff = draggable.layout.x - draggable.transformed.x;

    if (diff < -10) {
      draggable.node.classList.remove("rotateRight");
      draggable.node.classList.add("rotateLeft");
    } else if (diff > 10) {
      draggable.node.classList.remove("rotateLeft");
      draggable.node.classList.add("rotateRight");
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
                <Draggable id={index()}>
                  <Card content={question.word.content} />
                </Draggable>
              </Show>
            )}
          </For>
        </CardStack>
        <DropZone content="het" />
      </Show>
    </div>
  );
}
