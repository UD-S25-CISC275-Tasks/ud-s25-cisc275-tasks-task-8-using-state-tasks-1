import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to roll a 6-sided die.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(1);

    function rollDice(): void {
        setDie1(d6());
        setDie2(d6());
    }

    return (
        <div>
            <h3>Two Dice</h3>
            <p>Die 1: 🎲 {die1}</p>
            <p>Die 2: 🎲 {die2}</p>
            <Button onClick={rollDice}>Roll Dice</Button>
            {die1 === die2 ? <p>You Win! 🎉</p> : <p>Try Again!</p>}
        </div>
    );
}
