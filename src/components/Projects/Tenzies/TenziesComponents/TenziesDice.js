import React from "react";

export default function TenziesDice({ num, isHeld, holdDice }) {
  return (
    <div
      className={isHeld ? "tenzies__dice isHeld" : "tenzies__dice"}
      onClick={holdDice}
    >
      <p className="tenzies__dice-num">{num}</p>
    </div>
  );
}
