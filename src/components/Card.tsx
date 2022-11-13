import "./Card.scss";

import { createDraggable } from "@thisbeyond/solid-dnd";

export function Card(props: { id: number; content: string }) {
  const draggable = createDraggable(props.id);

  return (
    <div class="card" use:draggable>
      <div>{props.content}</div>
    </div>
  );
}
