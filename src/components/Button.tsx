import "./Button.scss";

import { A } from "@solidjs/router";

export function Button(props: { content: string; href: string }) {
  return (
    <A href={props.href} class="button">
      {props.content}
    </A>
  );
}
