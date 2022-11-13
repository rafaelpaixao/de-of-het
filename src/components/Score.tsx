import "./Score.scss";

import { useGame } from "../game";

export function Score() {
  const { questions, score } = useGame();

  return (
    <div class="score">
      <p>And your score is...</p>
      <p>
        {score()} out of {questions.length}
      </p>
    </div>
  );
}
