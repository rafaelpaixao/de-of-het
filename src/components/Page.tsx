import "./Page.scss";

import type { JSX } from "solid-js";

interface IPageProps {
  children: JSX.Element | JSX.Element[];
}

export function Page(props: IPageProps) {
  return <div class="page">{props.children}</div>;
}
