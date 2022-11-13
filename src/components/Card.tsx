import "./Card.scss";

export function Card(props: { content: string }) {
  return <div class="card">{props.content}</div>;
}
