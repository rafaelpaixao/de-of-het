import "./DropZone.scss";

import type { DeHet } from "../types";
import type { JSX } from "solid-js";

export function DropZone(props: { content: DeHet; onDrop: () => void }) {
  const onDragOver: JSX.EventHandlerUnion<HTMLDivElement, DragEvent> = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <div class="drop-zone" onDrop={props.onDrop} onDragOver={onDragOver}>
      <div>{props.content}</div>
    </div>
  );
}
