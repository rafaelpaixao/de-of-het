import "./DropZone.scss";

import type { DeHet } from "../types";
import { createDroppable } from "@thisbeyond/solid-dnd";

export function DropZone(props: { content: DeHet }) {
  const droppable = createDroppable(props.content);

  return (
    <div class="drop-zone" use:droppable>
      <div>{props.content}</div>
    </div>
  );
}
