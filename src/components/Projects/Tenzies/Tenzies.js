import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useEffect } from "react";
import Confetti from "react-confetti";
// import useWindowSize from "react-use/lib/useWindowSize";

import "./Tenzies.css";
import TenziesDice from "./TenziesComponents/TenziesDice";

export function Tenzies() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  // const { width, height } = useWindowSize();

  function generatNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newRandomNums = [];
    for (let i = 0; i < 10; i++) {
      newRandomNums.push(generatNewDice());
    }
    return newRandomNums;
  }

  const diceNums = dice.map((el) => (
    <TenziesDice
      key={el.id}
      num={el.value}
      isHeld={el.isHeld}
      holdDice={() => holdDice(el.id)}
    />
  ));

  function handleClick() {
    // setDice(allNewDice());
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generatNewDice();
      })
    );

    tenzies && window.location.reload(false);
  }

  function holdDice(id) {
    // console.log("holdDice", id);

    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("Hey you won");
    }
  }, [dice]);

  // console.log(" diceNums", diceNums);

  return (
    <div className="Tenzies__container">
      {tenzies && (
        <Confetti
        // width={width} height={height}
        />
      )}
      <div className="Tenzies__card-container">
        <main className="Tenzies__main">
          <h1 className="Tenzies__h1">Tenzies</h1>
          <p className={tenzies ? "Tenzies__p-tenzies" : "Tenzies__p"}>
            {tenzies
              ? "🎉🎈You Won!!! 🥳🎊"
              : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
          </p>
          <div className="Tenzies__numbers-container">
            <div className="Tenzies__numbers-body">{diceNums}</div>
          </div>
          <button
            className="Tenzies__btn
          "
            onClick={handleClick}
          >
            {tenzies ? "Reset" : "Roll"}
          </button>
        </main>
      </div>
    </div>
  );
}
