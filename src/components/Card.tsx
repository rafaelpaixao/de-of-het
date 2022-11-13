import "./Card.scss";

export function Card(props: { content: string }) {
  return (
    <div class="card">
      <div>{props.content}</div>
    </div>
  );
}
