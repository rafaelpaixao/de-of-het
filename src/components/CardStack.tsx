import "./CardStack.scss";

import type { JSX } from "solid-js";

export function CardStack(props: { children: JSX.Element | JSX.Element[] }) {
  return <div class="card-stack">{props.children}</div>;
}
