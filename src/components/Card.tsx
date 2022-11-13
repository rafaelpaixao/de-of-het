import "./Card.scss";

export function Card(props: {
  content: string;
  onDragStart: () => void;
  onDragEnd: () => void;
}) {
  return (
    <div
      class="card"
      draggable={true}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
    >
      {props.content}
    </div>
  );
}
