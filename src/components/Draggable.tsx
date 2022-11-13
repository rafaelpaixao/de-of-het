import "./Draggable.scss";

import { JSXElement } from "solid-js";
import { createDraggable } from "@thisbeyond/solid-dnd";

export function Draggable(props: { id: number; children: JSXElement }) {
  const draggable = createDraggable(props.id);

  return (
    <div use:draggable class="draggable">
      {props.children}
    </div>
  );
}
